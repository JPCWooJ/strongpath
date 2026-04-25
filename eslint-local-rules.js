'use strict'

module.exports = {
  'amazon-link-requires-ftc-disclosure': {
    meta: {
      type: 'problem',
      docs: {
        description:
          'Require FTCDisclosure to be imported alongside AmazonLink. FTC rules require affiliate disclosure above the fold on every page with Amazon links.',
      },
      messages: {
        missingDisclosure:
          'AmazonLink is imported but FTCDisclosure is not. ' +
          'FTC rules require affiliate disclosure above the fold on every page with Amazon links. ' +
          'Import and render <FTCDisclosure /> on this page.',
      },
      schema: [],
    },
    create(context) {
      let amazonLinkImportNode = null
      let hasFTCDisclosure = false

      return {
        ImportDeclaration(node) {
          if (node.source.value.includes('AmazonLink')) amazonLinkImportNode = node
          if (node.source.value.includes('FTCDisclosure')) hasFTCDisclosure = true
        },
        'Program:exit'() {
          if (amazonLinkImportNode && !hasFTCDisclosure) {
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
