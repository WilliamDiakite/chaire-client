import { base } from "$app/paths"
console.log('base', base)

const translations = {
    'en': {
        // routes
        'route.home': `/en`,
        'route.menu': `/en/menu`,
        'route.about': `/en/about`,
        'route.tenured': `/en/tenured`,
        'route.axis1': `/en/volet-1`,
        'route.axis2': `/en/volet-2`,
        'route.participants': `/en/participants`,
        'route.news': `/en/news`,
        'route.archives': `/en/archives`,
        'route.contact': `/en/contact`,


        // menu 
        'menu.home': "Homepage",
        'menu.about': "About the Chaire",
        'menu.axe1': "1st Axis",
        'menu.axe1-sub': "Towards a citizen museum",
        'menu.axe2': "2nd Axis",
        'menu.axe2-sub': "Contemporary practices of museum collections",
        'menu.tenured': "Tenured",
        'menu.participants': "Participants",
        'menu.news': "News",
        'menu.archives': "Archives",
        'menu.contact': "Contact us",

        // filters
        'filter.all': 'All',
        'filter.axis1': 'Axis 1',
        'filter.axis2': 'Axis 2',
        'filter.workshop': 'Workshop',
        'filter.colloque': 'Colloque',
        'filter.conf': 'Conference',
        'filter.publication': 'Publication',
        'filter.studyDay': "Study day",
        'filter.researcher': 'Researchers',
        'filter.coresearcher': 'Co-researchers',
        'filter.collaborators': 'Collaborators',
        'filter.student': 'Students',
        'filter.institution': 'Institutionnal partners',
    },
    'fr': {
        // routes
        'route.home': `/fr`,
        'route.menu': `/fr/menu`,
        'route.about': `/fr/a-propos`,
        'route.tenured': `/fr/titulaire`,
        'route.axis1': `/fr/axe-1`,
        'route.axis2': `/fr/axe-2`,
        'route.participants': `/fr/participants`,
        'route.news': `/fr/actualites`,
        'route.archives': `/fr/archives`,
        'route.contact': `/fr/contact`,

        // menu 
        'menu.home': "Page d'accueil",
        'menu.about': "À propos de la de Chaire",
        'menu.axe1': "Axe 1",
        'menu.axe1-sub': "Vers un musée citoyen",
        'menu.axe2': "Axe 2",
        'menu.axe2-sub': "Nouveaux usages des collections muséales",
        'menu.tenured': "Titulaire",
        'menu.participants': "Participants",
        'menu.news': "Actualités",
        'menu.archives': "Archives",
        'menu.contact': "Contactez nous",

        // filters
        'filter.all': 'Tous',
        'filter.axis1': 'Axe 1',
        'filter.axis2': 'Axe 2',
        'filter.workshop': 'Atelier',
        'filter.colloque': 'Colloque',
        'filter.conf': 'Conférence',
        'filter.publication': 'Publication',
        'filter.studyDay': "Journées d'étude",
        'filter.researcher': 'Chercheurs',
        'filter.coresearcher': 'Co-chercheurs',
        'filter.collaborators': 'Collaborateurs',
        'filter.student': 'Étudiants',
        'filter.institution': 'Partenaires institutionnel',
    }
}

export default translations