
function asyncRequire(name, type = 'component') {
  switch (type) {
    case 'component':
      return function (resolve) { // eslint-disable-line func-names
        require(['components/' + name], resolve) // eslint-disable-line
      };
    case 'assets':
      return function (resolve) { // eslint-disable-line func-names
        require(['assets/' + name], resolve) // eslint-disable-line
      };
    default:
      return function (resolve) { // eslint-disable-line func-names
        resolve();
      };
  }
}

/*
  Événement
  À propos
  Contact

  Événements/Savoir faire/Impliquez-vous/à propos/ contact
*/
const Global = {
  pages: {
    home: {
      route: {
        en: '/',
        fr: '/',
        component: asyncRequire('Home'),
      },
      background: require('@/assets/_ignore/images/highline-shadow.jpg'), //eslint-disable-line
    },
    /* Communauté
     * - Carte de la communauté
     * - Aide aux associations et communauté de slackline
     * - Records Canadien
     * - Déclaration d’un accident ou incident
     * - Rapports de comportement des fonctionnaires
     * - Liens
     */
    community: {
      route: {
        en: '/community',
        fr: '/communaute',
        component: asyncRequire('Home'),
      },
      background: asyncRequire('_ignore/images/highline-shadow.jpg', 'assets'),
    },
    /* Événement
     * - Compétition
     * - Festival
     * - Entrainement
     * - Calendrier
     */
    events: {
      route: {
        en: '/events',
        fr: '/evenements',
        component: asyncRequire('Home'),
      },
      background: asyncRequire('_ignore/images/highline-shadow.jpg', 'assets'),
    },
    /* Savoir-faire
     * - Les bases
     * - disciplines
     * - Savoir avancé
     * - Impliquez-vous
     */
    expertise: {
      route: {
        en: '/expertise/',
        fr: '/savoir-faire/',
        component: asyncRequire('KnowHow'),
      },
      children: {
        /* Les bases
         * - Les variances du sport
         * - Les principes fondamentales
         * - Protection d’arbre
         * - Sécurité
        */
        basics: {
          route: {
            en: 'basics',
            fr: 'les-bases',
            component: asyncRequire('KnowHow'),
          },
        },
        /* disciplines
         * - Rodéoline
         * - Waterline
         * - Longline
         * - Highline
        */
        disciplines: {
          route: {
            en: 'disciplines/:slug?',
            fr: 'disciplines/:slug?',
            component: asyncRequire('Disciplines'),
          },
        },
        /* Savoir avancé
         * - Comparaison des matériaux
         * - Concevoir du matériel
         */
        advanced: {
          route: {
            en: 'advanced',
            fr: 'avance',
            component: asyncRequire('KnowHow'),
          },
        },
        /* Impliquez - vous
        * - Devenir membre
        * - Shop online
        */
        involve: {
          route: {
            en: 'advanced',
            fr: 'avance',
            component: asyncRequire('KnowHow'),
          },
        },
      },
    },
    /* À propos
     * - Organisation
     * - Ancien Délégué
     * - Missions
     * - Partenaire
     */
    about: {

    },
    /* Contact */
    contact: {

    },
  },
};

export default Global;
