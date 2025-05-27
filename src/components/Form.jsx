import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    employed: false,
    favoriteColor: "",
    sauces: [],
    stooge: "",
    notes: "",
  });

  // დასაბმითებისას რომ გამოჩნდეს result-ში ობიექტი და მანამდე იყოს სიცარიელე
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    // ინფორმაცია რომ არ დაიკარგოს საბმითისას
    e.preventDefault();
    console.log("მონაცემები:", formData);

    // მაგალითად ესენი რომ იყოს სავალდებულო ველები
    const requiredFields = [
      "firstname",
      "lastname",
      "age",
      "favoriteColor",
      "stooge",
    ];

    let isValid = true;

    requiredFields.forEach((field) => {
      const value = formData[field];

      if (typeof value === "string" && value.trim() === "") {
        isValid = false;
      }

      if (Array.isArray(value) && value.length === 0) {
        isValid = false;
      }
    });

    if (!isValid) {
      // თუ ფორმა ცარიელია
      alert("გთხოვ, შეავსე ფორმა");
      return;
    }

    // თუ ფორმა შევსებულია submit-სას მონაცემები ჩაიწერება result-ში ობიექტის სახით
    setSubmittedData(formData);
  };

  const handleChange = (e) => {
    // ჩვეულებრივ input-ებში მნიშვნელობას ვიღებთ value-დან. checkbox-ებში კი მონიშვნის სტატუსი გვაინტერესებს, რომელსაც ვიღებთ checked-დან, ამიტომ საჭიროა type === "checkbox" შემოწმება.
    if (e.target.type === "checkbox" && e.target.name === "sauces") {
      // prev წარმოადგენს formData-ს ძველ მნიშვნელობას ანუ არსებულ ცარიელ ან უკვე შევსებულს. { ...prev } ქმნის ამ ობიექტის ასლს, რომ არ დავკარგო სხვა ველები, რაც უკვე არსებობს და თან ვამატებ ახალ key-value-ს დინამიურად
      setFormData((prev) => ({
        ...prev,
        sauces: e.target.checked
          ? [...prev.sauces, e.target.value]
          : prev.sauces.filter((s) => s !== e.target.value),
      }));
    } else if (e.target.type === "checkbox" && e.target.name === "employed") {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  // დარესეტებისას ველების გასუფთავებასთან ერთად result-ში ჩაწერილი ობიექტიც რომ წაიშალოს
  const handleReset = () => {
    setFormData({
      firstname: "",
      lastname: "",
      age: "",
      employed: false,
      favoriteColor: "",
      sauces: [],
      stooge: "",
      notes: "",
    });
    setSubmittedData(null);
  };

  return (
    <main>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        {/* first name  */}
        <div className="flex align-center">
          <label htmlFor="firstName" className="label-width">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="first name"
          />
        </div>
        {/* last name  */}
        <div className="flex align-center">
          <label htmlFor="lastName" className="label-width">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            name="lastname"
            value={formData.lastname}
            placeholder="last name"
            onChange={handleChange}
          />
        </div>
        {/* age  */}
        <div className="flex align-center">
          <label htmlFor="age" className="label-width">
            Age
          </label>
          <input
            id="age"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        {/* Employed */}
        <div className="flex align-center row">
          <label htmlFor="employed" className="label-width w-auto">
            Employed
          </label>
          <input
            id="employed"
            name="employed"
            type="checkbox"
            checked={formData.employed} // ვამოწმებ, არის თუ არა მონიშნული
            onChange={handleChange}
          />
        </div>
        {/* Favorite Color */}
        <div className="flex align-center row">
          <h4 className="label-width w-auto nosplit">Favorite Color</h4>
          <select
            name="favoriteColor"
            id="favoriteColor"
            onChange={handleChange}
            value={formData.favoriteColor}
            className="weight-bold"
          >
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
            <option value="Yellow">Yellow</option>
          </select>
        </div>
        {/* Sauces checkboxes */}
        <div className="flex">
          <h4 className="label-width">Sauces</h4>
          <div className="sauces-inputs row wrap">
            <div className="flex align-center gap-8 row basis-w-160">
              <input
                type="checkbox"
                name="sauces"
                id="Ketchup"
                value="Ketchup"
                checked={formData.sauces.includes("Ketchup")} // ვამოწმებ, არის თუ არა მონიშნული
                onChange={handleChange}
              />
              <label htmlFor="Ketchup" className="weight-bold">
                Ketchup
              </label>
            </div>
            <div className="flex align-center gap-8 row basis-w-160">
              <input
                type="checkbox"
                name="sauces"
                id="Mustard"
                value="Mustard"
                checked={formData.sauces.includes("Mustard")} // ვამოწმებ, არის თუ არა მონიშნული
                onChange={handleChange}
              />
              <label htmlFor="Mustard" className="weight-bold">
                Mustard
              </label>
            </div>
            <div className="flex align-center gap-8 row basis-w-160">
              <input
                type="checkbox"
                name="sauces"
                id="Mayonnaise"
                value="Mayonnaise"
                checked={formData.sauces.includes("Mayonnaise")} // ვამოწმებ, არის თუ არა მონიშნული
                onChange={handleChange}
              />
              <label htmlFor="Mayonnaise" className="weight-bold">
                Mayonnaise
              </label>
            </div>
            <div className="flex align-center gap-8 row basis-w-160">
              <input
                type="checkbox"
                name="sauces"
                id="Guacamole"
                value="Guacamole"
                checked={formData.sauces.includes("Guacamole")} // ვამოწმებ, არის თუ არა მონიშნული
                onChange={handleChange}
              />
              <label htmlFor="Guacamole" className="weight-bold">
                Guacamole
              </label>
            </div>
          </div>
        </div>
        {/* Best Stooge radio */}
        <div className="flex">
          <h4 className="label-width">Best Stooge</h4>
          <div className="stooge-inputs row wrap">
            <div className="flex align-center gap-8 row basis-w-120">
              <input
                type="radio"
                name="stooge"
                id="larry"
                value="larry"
                onChange={handleChange}
                checked={formData.stooge === "larry"} // ვამოწმებ state-ს მიხედვით
              />
              <label htmlFor="larry" className="weight-bold">
                Larry
              </label>
            </div>
            <div className="flex align-center gap-8 row basis-w-120">
              <input
                type="radio"
                name="stooge"
                id="moe"
                value="moe"
                onChange={handleChange}
                checked={formData.stooge === "moe"} // ვამოწმებ state-ს მიხედვით
              />
              <label htmlFor="moe" className="weight-bold">
                Moe
              </label>
            </div>
            <div className="flex align-center gap-8 row basis-w-120">
              <input
                type="radio"
                name="stooge"
                id="curly"
                value="curly"
                onChange={handleChange}
                checked={formData.stooge === "curly"} // ვამოწმებ state-ს მიხედვით
              />
              <label htmlFor="curly" className="weight-bold">
                Curly
              </label>
            </div>
          </div>
        </div>
        {/* Notes */}
        <div className="flex align-center">
          <label htmlFor="notes" className="label-width">
            Notes
          </label>
          <textarea
            name="notes"
            id="notes"
            value={formData.notes}
            placeholder="Note"
            onChange={handleChange}
          ></textarea>
        </div>
        {/* buttons  */}
        <div className="buttons">
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button type="reset" className="reset-btn">
            Reset
          </button>
        </div>
      </form>
      {/* form result - JSON-ის სახით ფორმის მონაცემები */}
      <div className="form-result">
        {/* <pre> HTML ელემენტს ტექსტს წარმოადგენს ზუსტად ისე, როგორც HTML ფაილშია დაწერილი. */}
        {/* სამი არგუმენტი გადაეცემა: JSON.stringify(value, replacer, space), value ანუ ის რაც უნდა გადააკონვერტიროს JSON სტრინგად. replacer თუ არ არის მითითებული (null-ია) ობიექტის ყველა key-value შედის მიღებულ JSON-ში და არაფერს ჩაანაცვლებს. space მიუთითებს, რომ გააკეთოს line break, არ იყოს ერთ ხაზზე და ასევე გააკეთოს white space. თუ 1-ზე ნაკლები რიცხვი ეწერება (მაგ: 0) ნიშნავს რომ არ უნდა იყოს უნდა სივრცე ან line break, თუ 1-ზე მეტს დავწერთ line break-საც გააკეთებს და white spaces-საც (შეწევას). რაც უფრო მეტ რიცხვს დავწერთ უფრო მეტად შეწევს, თუმცა 10-ზე მეტის დაწერას აზრი არ აქვს, რადგან მაინც 10-ად აღიქვამს */}
        <pre>{submittedData && JSON.stringify(formData, null, 3)}</pre>
      </div>
    </main>
  );
}

export default Form;
