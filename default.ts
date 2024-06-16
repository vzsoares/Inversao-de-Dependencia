export const products = [
    { name: "test1", status: 2, id: 1 },
    { name: "test2", status: 4, id: 2 },
    { name: "test3", status: 1, id: 3 },
];

export const createTable =
    "CREATE TABLE IF NOT EXISTS products('name' varchar, 'status' integer, 'id' INTEGER PRIMARY KEY AUTOINCREMENT ); INSERT OR IGNORE INTO products VALUES('test1',1,1); INSERT OR IGNORE INTO products VALUES('test2',4,2); INSERT OR IGNORE INTO products VALUES('test3',1,3)";
