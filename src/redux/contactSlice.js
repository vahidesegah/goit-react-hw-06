import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const loadContacts = () => {
  try {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      // Kontrolü düzelt: savedContacts var mı diye bak
      const parsedContacts = JSON.parse(savedContacts);
      if (Array.isArray(parsedContacts)) {
        // parsedContacts'ın bir array olup olmadığını kontrol et
        return parsedContacts;
      } else {
        console.warn(
          "localStorage'daki veri geçerli bir dizi değil. Varsayılan veriler yüklendi."
        );
      }
    }
  } catch (error) {
    console.error("Error loading contacts from localStorage:", error);
  }

  return [
    // Varsayılan veriler
    { id: nanoid(), name: "Gökhan Karaduman", phone: "4240000000" },
    { id: nanoid(), name: "Hermione Kline", phone: "4242368757" },
    { id: nanoid(), name: "Eden Clements", phone: "4242368758" },
    { id: nanoid(), name: "Annie Copeland", phone: "4242368759" },
  ];
};

const initialContacts = loadContacts();

const initialState = {
  contacts: initialContacts,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContact: (state, action) => {
      state.contacts = action.payload;
      localStorage.setItem("contacts", JSON.stringify(action.payload)); // Doğrudan action.payload'u kaydet
    },
    addContact: (state, action) => {
      const newContact = { ...action.payload, id: nanoid() }; // nanoid() burada oluştur
      const newContacts = [...state.contacts, newContact];
      state.contacts = newContacts;
      localStorage.setItem("contacts", JSON.stringify(newContacts));
    },
    removeContact: (state, action) => {
      const newContacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      state.contacts = newContacts;
      localStorage.setItem("contacts", JSON.stringify(newContacts));
    },
  },
});

export const { setContact, addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
