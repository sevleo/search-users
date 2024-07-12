import User from "../models/user";

const loadTestData = async () => {
  const testData = [
    { email: "jim@gmail.com", number: "221122" },
    { email: "jam@gmail.com", number: "830347" },
    { email: "john@gmail.com", number: "221122" },
    { email: "jams@gmail.com", number: "349425" },
    { email: "jams@gmail.com", number: "141424" },
    { email: "jill@gmail.com", number: "822287" },
    { email: "jill@gmail.com", number: "822286" },
  ];

  try {
    await User.insertMany(testData);
    console.log("Test data loaded successfully");
  } catch (error) {
    console.error("Error loading test data:", error);
  }
};

export default loadTestData;
