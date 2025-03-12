import { record } from 'astro:schema';
import Pocketbase from 'pocketbase';
const pb = new Pocketbase('http://127.0.0.1:8090');

export async function getAllMoviesSortedByDate() {
    const records = await pb.collection('film').getFullList({
        sort: 'date_projection',
    });
    return records;
}

export async function getAllActivitesSortedByDate() {
    const records = await pb.collection('activite').getFullList({
        sort: 'date',
    });
    return records;
}

export async function getAllActeurAndRealisateurSortedByNom() {
    const records = await pb.collection('invite').getFullList({sort: 'nom'}, {filter: "role = 'realisateur'||role = 'acteur'"});
    return records;
}

export async function getFilmById(id) {
    const record = await pb.collection('film').getOne(id);
    return record;
}

export async function getActivitesById(id) {
    const record = await pb.collection('activite').getOne(id);
    return record;
}

export async function getInviteById(id) {
    const record = await pb.collection('invite').getOne(id);
    return record;
}

export async function getActiviteByAnimateurId(id) {
    const records = await pb.collection('activite').getFullList({filter: `animateur.id ='${id}'`, expand: 'invite'});
    return records;
}

export async function getActiviteByAnimateurName(nom) {
    const records = await pb.collection('activite').getFullList({
        filter: `animateur.nom ='${nom}'`, expand: 'invite'
    });
    return records;
}

export async function UpdateFilmById(id, data) {
    const record = await pb.collection('film').updateOne(id, data);
    return record;
}

export async function UpdateActivitesById(id, data) {
    const record = await pb.collection('activite').updateOne(id, data);
    return record;
}

export async function UpdateInviteById(id, data) {
    const record = await pb.collection('invite').updateOne(id, data);
    return record;
}

export async function getActivites(){
    try {
        let records = await pb.collection('activite').getFullList();
        records = records.map((record) => {
        record.img = pb.files.getURL(record, record.image);
        return record;});
        return records;}
 catch (error) {
    console.error(error);
    return [];
}}

export async function getFilmsByType(type){
    try {
        let records = await pb.collection('film').getFullList({filter : `type_film = '${type}'`});
        records = records.map((record) => {
        record.img = pb.files.getURL(record, record.affiche);
        return record;});
        return records;}
 catch (error) {
    console.error(error);
    return [];
}}

export async function getPartenaire(){
    try {
        let records = await pb.collection('partenaires').getFullList();
        records = records.map((record) => {
        record.img = pb.files.getURL(record, record.image);
        return record;});
        return records;}
 catch (error) {
    console.error(error);
    return [];
}}