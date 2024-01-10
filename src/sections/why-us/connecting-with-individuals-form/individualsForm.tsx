"use client";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  Snackbar,
  TextField,
} from "@mui/material";
import React, { useRef, useState } from "react";
import CustomHeading from "@/components/custom-heading";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import EmailIcon from "@/assets/auth/sms.png";
import * as yup from "yup";
import Image from "next/image";
import axios from "axios";

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  message: string;
  subject: string;
  rememberMe: boolean;
  business_name: string;
};

const ValidationSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("First name is required"),
  phone_number: yup.string().required("Number is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  message: yup.string().required("message is required"),
  subject: yup.string().required("Subject is required"),
  rememberMe: yup.boolean(),
});

const IndividualsForm = () => {
  const [open, setOpen] = React.useState(false);
  const vertical = "top";
  const horizontal = "center";
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver<any>(ValidationSchema),
  });
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    data.business_name = "Legal Help Squad";
    // console.log(data);
    try {
      const response = await axios.post(
        "https://jobs.orcaloholding.co.uk/api/sale-site/contact-us",
        data
      );
      setOpen(true);
      reset();
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const styles = {
    fileInput: {
      display: "none",
    },
  };

  return (
    <Box sx={{ padding: "1.7rem", background: "#1A2028" }}>
      <Box sx={{ paddingBottom: "1rem", textAlign: "center" }}>
        <CustomHeading
          label="We like connecting with individuals that seek to effect change."
          textFontSize="30px"
          textFontWeight="700"
          textAlign="center"
        />
      </Box>

      <Box
        sx={{
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "400",
          marginBottom: "2rem",
          padding: { sm: "0 20px", lg: "0 150px", xl: "0 250px" },
        }}
      >
        <p>
          If you have the necessary abilities but don&apos;t see an opening that
          suits them here, please still get in contact. Include your resume and
          a brief &apos; explanation of why you want to work for us in the space
          provided.
        </p>
      </Box>

      <Grid container justifyContent="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
            }}
          >
            <Box>
              <label>First Name</label>
              <TextField
                sx={styless.textField}
                InputProps={{
                  style: {
                    color: "#fff",
                  },
                }}
                variant="outlined"
                placeholder="Enter First Name here"
                fullWidth
                {...register("first_name")}
                error={Boolean(errors.first_name)}
              />
              <Box sx={styless.validationText}>
                {errors.first_name && errors.first_name.message}
              </Box>
            </Box>
            <Box>
              <label>Last Name</label>
              <TextField
                sx={styless.textField}
                InputProps={{
                  style: {
                    color: "#fff",
                  },
                }}
                variant="outlined"
                placeholder="Enter First Name here"
                fullWidth
                {...register("last_name")}
                error={Boolean(errors.last_name)}
              />
              <Box sx={styless.validationText}>
                {errors.last_name && errors.last_name.message}
              </Box>
            </Box>
          </Box>

          <Grid item xs={12} sx={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
            <label>Email</label>
            <TextField
              sx={styless.textField}
              InputProps={{
                style: {
                  color: "#fff",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <Image src={EmailIcon} alt="email" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              fullWidth
              placeholder="Enter Email here"
              {...register("email")}
              error={Boolean(errors.email)}
            />
            <Box sx={styless.validationText}>
              {errors.email && errors.email.message}
            </Box>
          </Grid>

          <Grid item xs={12} sx={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
            <label>Phone Number</label>
            <TextField
              sx={styless.textField}
              InputProps={{
                style: {
                  color: "#fff",
                },
              }}
              variant="outlined"
              placeholder="Enter Phone Number"
              fullWidth
              {...register("phone_number")}
              error={Boolean(errors.phone_number)}
            />
            <Box sx={styless.validationText}>
              {errors.phone_number && errors.phone_number.message}
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
            <label>Subject</label>
            <TextField
              sx={styless.textField}
              InputProps={{
                style: {
                  color: "#fff",
                },
              }}
              variant="outlined"
              placeholder="Enter Subject"
              fullWidth
              {...register("subject")}
              error={Boolean(errors.subject)}
            />
            <Box sx={styless.validationText}>
              {errors.subject && errors.subject.message}
            </Box>
          </Grid>

          <Grid item xs={12} sx={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
            <label>message</label>
            <TextField
              sx={styless.textField}
              InputProps={{
                style: {
                  color: "#fff",
                },
              }}
              id="outlined-multiline-static"
              multiline
              rows={4}
              fullWidth
              placeholder="Enter Email here"
              {...register("message")}
              error={Boolean(errors.message)}
            />
            <Box sx={styless.validationText}>
              {errors.message && errors.message.message}
            </Box>
          </Grid>

          <Button sx={styless.signbtn} type="submit">
            Submit
          </Button>

          <FormControlLabel
            control={
              <Checkbox sx={styless.checkbox} {...register("rememberMe")} />
            }
            label="By Submitting I will agree to all the terms and conditions and privacy policies"
          />
        </form>
        <Snackbar
          open={open}
          anchorOrigin={{ vertical, horizontal }}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            Your message have been sent successfully! We will be in contact with
            you soon.
          </Alert>
        </Snackbar>
      </Grid>
    </Box>
  );
};

export default IndividualsForm;

const styless = {
  textField: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white", // Change the border color on hover
      },
    },
    borderRadius: "8px",

    background: "#1B2129",
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
    color: "#fff",
    marginTop: "4px",
  },
  validationText: {
    color: "red",
    marginTop: "4px",
  },
  checkbox: {
    color: "white",
    "& .MuiSvgIcon-root": {
      fontSize: 20,
      background: "white",
      borderRadius: "4px",
    },
    "&.Mui-checked": {
      color: "#7a5af8",
    },
  },
  signbtn: {
    background: "#FEDE4B",
    borderRadius: "30px",
    boxShadow: " 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
    width: "100%",
    padding: "0.7rem",
    fontSize: "14px",
    fontWeight: 600,
    color: "#000000",
    marginTop: "2rem",
    marginBottom: "2rem",
    "&:hover": {
      background: "#FEDE4B",
    },
  },
};
