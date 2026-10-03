import React, { useState, useEffect } from "react";
import StaffRouteGuard from "../../../components/staff/StaffRouteGuard.jsx";
import staffAxios from "../../../components/api/staffAxios.js";
import { validateInviteForm, validatePrice } from "../../../utils/validation.js";

const API_BASE = import.meta.env.VITE_API_BASE || "/api";
const TABS = ["Orders", "Agents", "Prices", "Messages"];
