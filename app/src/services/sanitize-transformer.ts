import DOMPurify from 'dompurify';

const AllowedTags = [
  '#text',
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'b',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'center',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'font',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hr',
  'i',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'main',
  'map',
  'mark',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'strike',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'wbr',
  'html',
];

const AllowedAttributes = [
  'abbr',
  'accept',
  'acceptcharset',
  'accesskey',
  'action',
  'align',
  'alt',
  'async',
  'autocomplete',
  'axis',
  'border',
  'background',
  'bgcolor',
  'cellpadding',
  'cellspacing',
  'char',
  'charoff',
  'charset',
  'checked',
  'classid',
  'class',
  'classname',
  'clear',
  'colspan',
  'cols',
  'color',
  'content',
  'contextmenu',
  'controls',
  'compact',
  'coords',
  'data',
  'datetime',
  'defer',
  'dir',
  'disabled',
  'download',
  'draggable',
  'enctype',
  'face',
  'form',
  'formaction',
  'formenctype',
  'formmethod',
  'formnovalidate',
  'formtarget',
  'frame',
  'frameborder',
  'headers',
  'height',
  'hidden',
  'high',
  'href',
  'hreflang',
  'htmlfor',
  'httpequiv',
  'hspace',
  'icon',
  'id',
  'label',
  'lang',
  'list',
  'loop',
  'low',
  'manifest',
  'marginheight',
  'marginwidth',
  'max',
  'maxlength',
  'media',
  'mediagroup',
  'method',
  'min',
  'multiple',
  'muted',
  'name',
  'novalidate',
  'nowrap',
  'noshade',
  'open',
  'optimum',
  'pattern',
  'placeholder',
  'poster',
  'preload',
  'radiogroup',
  'readonly',
  'rel',
  'required',
  'role',
  'rowspan',
  'rows',
  'rules',
  'sandbox',
  'scope',
  'scoped',
  'scrolling',
  'seamless',
  'selected',
  'shape',
  'size',
  'sizes',
  'start',
  'sortable',
  'sorted',
  'span',
  'spellcheck',
  'src',
  'srcdoc',
  'srcset',
  'start',
  'step',
  'style',
  'summary',
  'tabindex',
  'target',
  'title',
  'translate',
  'type',
  'usemap',
  'valign',
  'value',
  'vspace',
  'width',
  'wmode',
];

class SanitizeTransformer {
  async run(bodyHTML: string) {
    return DOMPurify.sanitize(bodyHTML, {
      ALLOWED_TAGS: AllowedTags,
      ALLOWED_ATTR: AllowedAttributes,
      ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|xxx):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,
      KEEP_CONTENT: true,
    });
  }
}

export default new SanitizeTransformer();
