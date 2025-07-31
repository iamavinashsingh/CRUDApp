# Inventory CRUD App - React Native

A comprehensive **Inventory Management App** built with React Native. This application allows users to **add**, **update**, **delete**, and **view** inventory items with a clean, user-friendly interface. It demonstrates practical CRUD operations, state management, and dynamic UI updates in a React Native environment.

---

## ✨ Features

- **Dashboard View:**  
  Quickly access all inventory operations from a single dashboard.

- **All Items Listing:**  
  View a complete list of all inventory items, including their names, quantities, and units. Items with low stock are visually highlighted.

- **Low Stock Items:**  
  Instantly filter and view items with stock below a threshold (e.g., less than 10 units), helping you identify what needs restocking.

- **Add New Items:**  
  Add new inventory items by specifying the name, quantity, and unit. Input validation ensures no empty or invalid entries.

- **Edit Existing Items:**  
  Update the stock quantity of any item. The UI switches to edit mode when editing, and updates are reflected instantly.

- **Delete Items:**  
  Remove items from the inventory with a single tap.

- **Responsive UI:**  
  Clean, modern design with color cues for low-stock items and intuitive navigation.

- **State Management:**  
  All data is managed locally using React state hooks for instant feedback and updates.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (recommended) or React Native CLI

### Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/crud-app-react-native.git
    cd crud-app-react-native
    ```

2. **Install Dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Start the Development Server**
    ```bash
    npx expo start
    ```

4. **Run on Device or Emulator**
    - Use the Expo Go app on your phone, or an Android/iOS emulator.

---

## 🛠️ Usage Guide

- **Dashboard Navigation:**  
  Use the top navigation buttons to switch between "All Items", "Low Items", and "Create Items" views.

- **Add Item:**  
  1. Go to "Create Items".
  2. Enter the item name and quantity.
  3. Tap "Add Item in stock" to add it to the inventory.

- **Edit Item:**  
  1. In "Create Items", tap "Edit" next to an item.
  2. Update the quantity.
  3. Tap "Update Item" to save changes.

- **Delete Item:**  
  - Tap "Delete" next to any item in the list.

- **Low Stock Highlight:**  
  - Items with stock less than 10 are highlighted for quick identification.

---

## 📂 Project Structure

```
/src
  /screens
    - HomeScreen.jsx      # Main dashboard and navigation
    - AllItems.jsx        # List all inventory items
    - LowItems.jsx        # List low-stock items
    - CreateItems.jsx     # Add, edit, and delete items
/App.jsx                 # Entry point
```

---



## 🤝 Contributing

Contributions are welcome!  
To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request.

For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- All contributors and open-source libraries used.

---

**Feel free to open issues or suggest improvements! Happy coding!**