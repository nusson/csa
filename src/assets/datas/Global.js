/* eslint-disable global-require */
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
  Communauté
  Événement
  Savoir-faire
  À propos
  Contact

  Événements/Savoir faire/Impliquez-vous/à propos/ contact
*/
const Global = {
  pages: {
    /* Homepage
     * Maybe just a nive introduction video
     * then this whole page is a swiper that'll fit in a page header
     */
    home: {
      route: {
        en: '/',
        fr: '/',
        component: asyncRequire('Home'),
      },
      background: require('@/assets/_ignore/images/highline-shadow.jpg'),
      // highline-dark-sky.jpg, // eslint-disable-line
    },
    /* Communauté
     * - Carte de la communauté 1 page
     * - informations 1 page :
     *  - Aide aux associations et communauté de slackline
     *  - Records Canadien
     *  - Déclaration d’un accident ou incident
     *  - Rapports de comportement des fonctionnaires
     *  - Liens
     */
    community: {
      route: {
        en: '/community',
        fr: '/communaute',
        component: asyncRequire('Home'),
      },
      background: require('@/assets/_ignore/images/st-anne-queue-saisoniere.jpg'),
      // background: require('@/assets/_ignore/images/st-anne-vlad-felix.jpg'),
    },
    /* Événement = 1 page + details + filtres
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
      background: require('@/assets/_ignore/images/parc-with-people.jpg'),
    },
    /* Savoir-faire 4 pages
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
      background: require('@/assets/_ignore/images/highline-dark-sky.jpg'),
      // background: require('@/assets/_ignore/images/st-anne-vlad-felix.jpg'),
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
    /* À propos 1 page
     * - Organisation
     * - Ancien Délégué
     * - Missions
     * - Partenaire
     */
    about: {
      background: require('@/assets/_ignore/images/big-bag.jpg'),
    },
    /* Contact */
    contact: {
      background: require('@/assets/_ignore/images/team.jpg'),
    },
  },
};

export default Global;
