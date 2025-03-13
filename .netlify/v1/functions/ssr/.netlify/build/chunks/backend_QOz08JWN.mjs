import Pocketbase from 'pocketbase';

const pb = new Pocketbase('https://sae203.manolia-kocaoglu.fr');

async function getActivites(){
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

async function getFilmsByType(type){
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



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


async function getPartenaire(){
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

async function getProgramme(){
    try {
        let records = await pb.collection('programmation').getFullList();
        records = records.map((record) => {
        record.img = pb.files.getURL(record, record.image);
        return record;});
        return records;}
 catch (error) {
    console.error(error);
    return [];
}}

async function getInvite(){
    try {
        let records = await pb.collection('invite').getFullList();
        records = records.map((record) => {
        record.img = pb.files.getURL(record, record.photo);
        return record;});
        return records;}
 catch (error) {
    console.error(error);
    return [];
}}

async function getOneInvite(id){
    try {
        let records = await pb.collection('invite').getOne(id);
        records.img = pb.files.getURL(records, records.photo);
        return records;}
 catch (error) {
    console.error(error);
    return [];
}}

async function inviteByRole (role){
    try {
        let records = await pb.collection('invite').getFullList({filter : `role = '${role}'`});
        records = records.map((record) => {
        record.img = pb.files.getURL(record, record.photo);
        return record;});
        console.log(records);
        return records;}
 catch (error) {
    console.error(error);
    return [];
}}

export { getOneInvite as a, getInvite as b, getProgramme as c, getActivites as d, getPartenaire as e, getFilmsByType as g, inviteByRole as i };
