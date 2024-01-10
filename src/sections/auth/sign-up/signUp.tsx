"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationSchema } from "./data";
import EmailIcon from "@/assets/auth/sms.png";
import Lock from "@/assets/auth/lock.png";
import VisibileIcon from "@/assets/auth/eye.png";
import VisibilityOffIcon from "@/assets/auth/nonvassibale.png";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  business_name: string;
  rememberMe: boolean;
};

const SignUp = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [status, setStatus] = useState<any>("");
  const [open, setOpen] = React.useState(false);
  const vertical = "top";
  const horizontal = "center";

  const handleClose = () => {
    setOpen(false);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  // console.log("MSG", status);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver<any>(ValidationSchema),
  });

  const BusinessName = "Legal Help Squad";

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    router.push("/home");
    console.log(data);
  };

  return (
    <Box>
      <Box sx={styles.title}>SIGN UP</Box>

      <Box sx={{ padding: { sm: "3rem", xs: "1rem" } }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid spacing={4} container>
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <label>First Name</label>
                <TextField
                  sx={styles.textField}
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
                <Box sx={styles.validationText}>
                  {errors.first_name && errors.first_name.message}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <label>Last Name</label>
                <TextField
                  sx={styles.textField}
                  InputProps={{
                    style: {
                      color: "#fff",
                    },
                  }}
                  variant="outlined"
                  placeholder="Enter Last Name here"
                  fullWidth
                  {...register("last_name")}
                  error={Boolean(errors.last_name)}
                />
                <Box sx={styles.validationText}>
                  {errors.last_name && errors.last_name.message}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Box>
                <label>Email</label>
                <TextField
                  sx={styles.textField}
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
                <Box sx={styles.validationText}>
                  {errors.email && errors.email.message}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Box>
                <label>Password</label>
                <TextField
                  sx={styles.textField}
                  InputProps={{
                    style: {
                      color: "#fff",
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <Image src={Lock} alt="lock" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? (
                            <Image src={VisibilityOffIcon} alt="visableoff" />
                          ) : (
                            <Image src={VisibileIcon} alt="visable" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password here"
                  {...register("password")}
                  error={Boolean(errors.password)}
                />
                <Box sx={styles.validationText}>
                  {errors.password && errors.password.message}
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Box>
                <label>Confirm Password</label>
                <TextField
                  sx={styles.textField}
                  InputProps={{
                    style: {
                      color: "#fff",
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <Image src={Lock} alt="lock" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={handleToggleConfirmPasswordVisibility}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <Image src={VisibilityOffIcon} alt="visableoff" />
                          ) : (
                            <Image src={VisibileIcon} alt="visable" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  fullWidth
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter Confirm password here"
                  {...register("password_confirmation")}
                  error={Boolean(errors.password_confirmation)}
                />
                <Box sx={styles.validationText}>
                  {errors.password_confirmation &&
                    errors.password_confirmation.message}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Box>
                <label>Business Name</label>
                <TextField
                  sx={styles.textField}
                  InputProps={{
                    style: {
                      color: "#fff",
                    },
                  }}
                  placeholder="Enter business name here"
                  variant="outlined"
                  fullWidth
                  {...register("business_name")}
                  value={BusinessName}
                  error={Boolean(errors.business_name)}
                />
                <Box sx={styles.validationText}>
                  {errors.business_name && errors.business_name.message}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <FormControlLabel
                control={
                  <Checkbox sx={styles.checkbox} {...register("rememberMe")} />
                }
                label="Remember Me"
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Button sx={styles.signbtn} type="submit">
                Sign Up
              </Button>
              <Box
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#ffff",
                  textAlign: "center",
                  paddingTop: "1.3rem",
                  paddingBottom: "1.3rem",
                }}
              >
                Already have an account?
                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#FEDE4B",
                    textDecoration: "none",
                    marginLeft: "4px",
                  }}
                  href="/sign-in"
                >
                  Sign In
                </Link>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical, horizontal }}
        onClose={handleClose}
      >
        {status ? (
          <Alert onClose={handleClose} severity="success">
            You have successfully registered. Please Check your Email!{" "}
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Email Already exists
          </Alert>
        )}
      </Snackbar>
    </Box>
  );
};

export default SignUp;

const styles = {
  title: {
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: "100px",
    color: "#fff",
    textAlign: "center",
    paddingTop: "5rem",
  },
  textField: {
    borderRadius: "8px",
    border: "1px solid #18323A",
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
    "&:hover": {
      background: "#FEDE4B",
    },
  },
  signWithGooglebtn: {
    background: "tranparent",
    border: "1px solid white",
    borderRadius: "30px",
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
    width: "100%",
    padding: "0.7rem",
    fontSize: "14px",
    fontWeight: 600,
    color: "white",
  },
};
