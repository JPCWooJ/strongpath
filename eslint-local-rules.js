'use strict'

module.exports = {
  'amazon-link-requires-ftc-disclosure': {
    meta: {
      type: 'problem',
      docs: {
        description:
          'Require FTCDisclosure to be imported alongside AmazonLink, unless the shared marketing footer carries the disclosure.',
      },
      messages: {
        missingDisclosure:
          'AmazonLink is imported but FTCDisclosure is not. ' +
          'Import and render <FTCDisclosure /> on this page or use a shared layout that renders the disclosure.',
      },
      schema: [],
    },
    create(context) {
      let amazonLinkImportNode = null
      let hasFTCDisclosure = false
      const filename = context.getFilename()
      const usesMarketingFooterDisclosure =
        filename.includes('app/(marketing)/') || filename.includes('app\\(marketing)\\')

      return {
        ImportDeclaration(node) {
          if (node.source.value.includes('AmazonLink')) amazonLinkImportNode = node
          if (node.source.value.includes('FTCDisclosure')) hasFTCDisclosure = true
        },
        'Program:exit'() {
          if (amazonLinkImportNode && !hasFTCDisclosure && !usesMarketingFooterDisclosure) {
            context.report({
              node: amazonLinkImportNode,
              messageId: 'missingDisclosure',
            })
          }
        },
      }
    },
  },
}
