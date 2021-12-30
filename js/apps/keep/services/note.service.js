import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

export const noteService = {
    query
}

const KEY = 'noteDB';
_createNotes();

function _createNotes() {
    var notes = [
        {
            id: "n101",
            type: "note-txt",
            isPinned: true,
            info: {
                txt: "Fullstack me Baby!"
            },
            style: {
                backgroundColor: "#FFF"
            }
        },
        {
            id: "n102",
            type: "note-img",
            isPinned: false,
            info: {
                url: "http://some-img/me",
                title: "Bobi and Me"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: "n103",
            type: "note-todos",
            isPinned: false,
            info: {
                label: "Get my stuff together",
                todos: [
                    { txt: "Driving liscence", doneAt: null },
                    { txt: "Coding power", doneAt: 187111111 }
                ]
            },
            style: {
                backgroundColor: "#FFF"
            }
        }
    ];
    _saveNotesToStorage(notes);
}

function query() {
    const notes = _loadNotesFromStorage();
    return Promise.resolve(notes);
}

function _createNoteOfTxt(type, txt) {
    return {
        id,
        type,
        isPinned: false,
        info: {
            txt
        },
        style: {
            backgroundColor: "#33ccff"
        }
    }
}

function _createNoteOfImg(type, url) {
    return {
        id,
        type,
        isPinned: false,
        info: {
            url,
            title: ''
        },
        style: {
            backgroundColor: "#33ccff"
        }
    }
}

function _createNoteOfTodo(type) {
    return {
        id,
        type,
        isPinned: false,
        info: {
            label: '',
            todos: [
                {
                    txt: '',
                    doneAt: null
                }
            ]
        },
        style: {
            backgroundColor: "#33ccff"
        }
    }
}

function _saveNotesToStorage(notes) {
    storageService.saveToStorage(KEY, notes);
}

function _loadNotesFromStorage() {
    return storageService.loadFromStorage(KEY);
}