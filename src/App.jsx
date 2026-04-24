import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import {
  BookOpen, Pencil, Headphones, Feather, Flame, Trophy, RotateCw,
  Check, X, ChevronRight, ChevronLeft, Volume2, Sparkles, Calendar,
  Home, Layers, TrendingUp, Loader2, Lightbulb,
  GraduationCap, Award, Cloud, ArrowRight, Pause, CheckCircle2,
  Star, Moon, Sunrise, Eye, EyeOff, Play, Shuffle, RefreshCw,
} from "lucide-react";
const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
const LEVEL_NAMES = {
  A1: "Iniciante",
  A2: "Basico",
  B1: "Intermediario",
  B2: "Intermediario Alto",
  C1: "Avancado",
  C2: "Proficiente",
};
