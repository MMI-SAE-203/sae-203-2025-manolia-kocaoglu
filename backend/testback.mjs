import { getAllMoviesSortedByDate } from './backend.mjs' ;
import { getAllActivitesSortedByDate } from './backend.mjs' ;
import { getAllActeurAndRealisateurSortedByNom } from './backend.mjs' ;
import { getFilmById } from './backend.mjs' ;
import { getActivitesById } from './backend.mjs' ;
import { getInviteById } from './backend.mjs' ;
import { getActiviteByAnimateurId } from './backend.mjs' ;
import { getActiviteByAnimateurName } from './backend.mjs' ;
import { addFilm } from './backend.mjs' ;
import { UpdateFilmById } from './backend.mjs' ;

try {
    const movies = await getAllMoviesSortedByDate() ;
    console.log(movies) ;
} catch (e) {
    console.error(e) ;
}

try {
    const activites = await getAllActivitesSortedByDate() ;
    console.log(activites) ;
} catch (e) {
    console.error(e) ;
}

try {
    const invites = await getAllActeurAndRealisateurSortedByNom() ;
    console.log(invites) ;
}
catch (e) {
    console.error(e) ;
}

try {
    const film = await getFilmById('1blg3ivorz2ef09') ;
    console.log(film) ;
}
catch (e) {
    console.error(e) ;
}

try {
    const activite = await getActivitesById('b942x9idd00a21o') ;
    console.log(activite) ;
}
catch (e) {
    console.error(e) ;
}

try {
    const invite = await getInviteById('n826g1l9o151u3j') ;
    console.log(invite) ;
}
catch (e) {
    console.error(e) ;
}
   

try {
    const activite = await getActiviteByAnimateurId('k8d15suq8h4t76t') ;
    console.log(activite) ;
} catch (e) {
    console.error(e) ;
}

try {
    const activite = await getActiviteByAnimateurName('Moore') ;
    console.log(activite) ;
}
catch (e) {
    console.error(e) ;
}

/*try {
    const film = await addFilm ({titre: 'test', annee_de_sortie: 2028, genre: 'fiction', liste_acteur: 'tom cruise', description: 'un film de fiction basé sur la ficiton', affiche:''}) ;
    console.log(film) ;
} catch (e) {
    console.error(e) ;
}*/

/*try {
    const film = await UpdateFilmById ('w84vvv466x27625', {titre: 'test2', annee_de_sortie: 2029, genre: 'fiction2', liste_acteur: 'tom cruise3', description: 'un film de fiction basé sur la ficiton 2'}) ;
    console.log(film) ;
}
catch (e) {
    console.error(e) ;
}*/