export const categories = [
  { slug: 'chladnicky',   label: 'Chladničky a mrazničky', active: true  },
  { slug: 'digestory',    label: 'Digestory',               active: true  },
  { slug: 'kavovary',     label: 'Kávovary',                active: true  },
  { slug: 'mikrovlnky',   label: 'Mikrovlnné rúry',         active: true  },
  { slug: 'pracky',       label: 'Práčky a sušičky',        active: true  },
  { slug: 'sporaky',      label: 'Sporáky',                 active: true  },
  { slug: 'televizory',   label: 'Televízory',              active: true  },
  { slug: 'umyvacky',     label: 'Umývačky riadu',          active: true  },
  { slug: 'varne-dosky',  label: 'Vstavané varné dosky',    active: true  },
]

export const activeCategories = categories.filter(c => c.active)
