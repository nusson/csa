export const BuilderTypes = {
  quote: 'quote',
  title: 'title',
  colomns: 'colomns',
  image: 'image',
  paragraphe: 'paragraphe',
  wysiwyg: 'wysiwyg',
  layout: 'layout',
  list: 'list',
};
export const BuilderLayouts = {
  colomns: 'colomns',
  grid: 'grid',
  full: 'full',
  thumb: 'thumb',
  float: 'float',
  floatRight: 'floatRight',
  cards: 'cards',
  tips: 'tips',
};

export default class SecurityPageModel {
  constructor() {
    this.datas = {
      builder: [
        {
          type: BuilderTypes.quote,
          content: {
            fr: {
              content: 'At the end of the day, the goals are simple: safety and security',
              author: 'Jodi Rell',
              alt: 'safety and security',
            },
          },
        },
        {
          type: BuilderTypes.layout,
          layout: BuilderLayouts.section,
          content: [
            {
              type: BuilderTypes.title,
              content: {
                fr: 'Rassurer',
                en: 'Rassurer',
              },
            },
          ],
        },
        {
          type: BuilderTypes.layout,
          layout: BuilderLayouts.section,
          content: [
            {
              type: BuilderTypes.title,
              content: {
                fr: 'Codes d’étique',
                en: 'Codes d’étique',
              },
            },
            {
              type: BuilderTypes.title,
              tag: 'h2',
              content: {
                fr: 'Choisir ses Arbres',
                en: 'Choisir ses Arbres',
              },
            },
          ],
        },
        {
          type: BuilderTypes.layout,
          layout: BuilderLayouts.section,
          content: [
            {
              type: BuilderTypes.title,
              content: {
                fr: 'Avancé',
                en: 'Advanced',
              },
            },
          ],
        },
        {
          type: BuilderTypes.layout,
          layout: BuilderLayouts.section,
          content: [
            {
              type: BuilderTypes.title,
              content: {
                fr: 'Rapports',
                en: 'Reports',
              },
            },
            {
              type: BuilderTypes.subtitle,
              content: {
                fr: 'Déclaration d’un accident ou incident',
                en: 'Déclaration d’un accident ou incident',
              },
            },
            {
              type: BuilderTypes.subtitle,
              content: {
                fr: 'Rapports de comportement des fonctionnaires',
                en: 'Rapports de comportement des fonctionnaires',
              },
            },
          ],
        },
        {
          type: BuilderTypes.layout,
          layout: BuilderLayouts.section,
          content: [
            {
              type: BuilderTypes.title,
              content: {
                fr: 'Codes d\'étique',
                en: 'Codes d\'étique',
              },
            },
            {
              type: BuilderTypes.subtitle,
              content: {
                fr: 'choisir ses Arbres',
              },
            },
            {
              type: BuilderTypes.list,
              content: {
                fr: [
                  `Choisir des arbres sains de minimum 30 cm de diamètre à la hauteur de l’ancrage.
                    <br><small>Si l’arbre bouge, c‘est qu‘il n‘est pas adapté.</small>`,
                  'Toujours utiliser une protection large et stable qui couvre toute la circonférence du tronc.',
                  'Les élingues larges (min. 5 cm) et placées en éventail distribuent mieux la charge sur l’arbre.',
                  'Les poteaux, réverbères et rambardes ne sont généralement pas assez solides.',
                ],
              },
            },
            {
              type: BuilderTypes.subtitle,
              content: {
                fr: 'Être visible en tout temps',
              },
            },
            {
              type: BuilderTypes.list,
              content: {
                fr: [
                  'Ne jamais laisser une slackline sans surveillance.',
                  'Démonter sa slackline avant la tombée de la nuit.',
                  'Il est essentiel de ne pas couper les sentiers avec sa slackline.',
                ],
              },
            },
            {
              type: BuilderTypes.subtitle,
              content: {
                fr: 'Respecter les autres',
              },
            },
            {
              type: BuilderTypes.list,
              content: {
                fr: [
                  'Éviter les endroits trop achalandés.',
                  'Porter une attention particulière aux autres activités du parc <small></small>(vélos, frisbees, ballons, cerf - volants, enfants, chiens)</small>.',
                ],
              },
            },
            {
              type: BuilderTypes.subtitle,
              content: {
                fr: 'Respecter les lieux',
              },
            },
            {
              type: BuilderTypes.list,
              content: {
                fr: [
                  'Laissez la place plus propre qu‘elle ne l‘était à votre arrivée.',
                  'Rappelez-vous que vous représentez l‘ensemble de la communauté de slackliners en tout temps!',
                ],
              },
            },
            {
              type: BuilderTypes.tips,
              content: {
                title: {
                  fr: 'Communauté',
                  en: 'Community',
                },
                fr: 'N‘hesitez pas à approcher les autres slackliners afin de partager votre passion et vos connaissances.',
              },
            },
          ],
        },
      ],
    };
  }
  get builder() {
    return this.datas.builder;
  }
}
