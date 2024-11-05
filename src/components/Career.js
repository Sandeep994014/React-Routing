import React from "react";
import "../App.css";
import { useForm, Controller } from "react-hook-form";
import "./styles.css";
import ReactSelect from "react-select";
import { useNavigate } from "react-router-dom"; 

const Career = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ReactSelect: { value: "vanilla", label: "Vanilla" },
    },
  });

  const navigate = useNavigate(); 

  const onSubmit = (data) => {
    navigate("/form-details", { state: { data } });
  };

  return (
    <>
      <div className="form-container">
        <h1 className="form-heading">Register Here</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input
            placeholder="Enter your first name"
            {...register("firstName", {
              required: "This field is required",
              maxLength: { value: 20, message: "First name cannot exceed 20 characters" },
              pattern: { value: /^[A-Za-z]+$/i, message: "Alphabetical characters only" },
            })}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}

          <label>Last Name</label>
          <input
            placeholder="Enter your last name"
            {...register("lastName", { pattern: { value: /^[A-Za-z]+$/i, message: "Alphabetical characters only" } })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}

          <label>Age</label>
          <input
            placeholder="Enter your age"
            type="number"
            {...register("age", {
              min: { value: 18, message: "You must be at least 18 years old" },
              max: { value: 99, message: "You must be younger than 99 years old" },
            })}
          />
          {errors.age && <p>{errors.age.message}</p>}

          <label>Gender</label>

          <select {...register("gender")}>
            <option value="">Select your gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>

          <section>
            <label>React Select</label>
            <Controller
              name="ReactSelect"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  isClearable
                  {...field}
                  options={[
                    { value: "chocolate", label: "Chocolate" },
                    { value: "strawberry", label: "Strawberry" },
                    { value: "vanilla", label: "Vanilla" },
                  ]}
                />
              )}
            />
          </section>

          <div>
            <label>Website</label>
            <input {...register("website")} />
            {errors.website && <p>{errors.website.message}</p>}
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};



export default Career;
