const questionBank = {
    "Hypertension": [
        {
            "question": "A 55-year-old male with a history of Stage 2 Hypertension and Type 2 Diabetes is currently taking Lisinopril 20mg daily. His current BP is 142/88 mmHg. According to the ACC/AHA guidelines, what is the most appropriate next step in his management?",
            "options": [
                "Increase Lisinopril to 40mg daily",
                "Add Amlodipine 5mg daily",
                "Add Chlorthalidone 12.5mg daily",
                "No change, BP is at goal"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Increasing the dose is an option, but for Stage 2 HTN (BP > 140/90), adding a second agent from a different class is generally more effective than maximizing a single agent.",
                "Correct. For patients with Diabetes and Hypertension, the goal is < 130/80. Adding a DHP-CCB like Amlodipine provides synergistic BP lowering and is first-line.",
                "Chlorthalidone is a valid first-line choice, but in diabetic patients, CCBs are often favored for their metabolic neutrality, though both are acceptable.",
                "Incorrect. For patients with Diabetes or ASCVD risk, the ACC/AHA goal is < 130/80. This patient is at 142/88 and requires escalation."
            ]
        },
        {
            "question": "Which of the following medications is a direct renin inhibitor?",
            "options": [
                "Losartan",
                "Enalapril",
                "Aliskiren",
                "Spironolactone"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Losartan is an Angiotensin Receptor Blocker (ARB), not a renin inhibitor.",
                "Enalapril is an ACE Inhibitor, which blocks the conversion of Angiotensin I to II.",
                "Correct. Aliskiren (Tekturna) is the only FDA-approved direct renin inhibitor.",
                "Spironolactone is an aldosterone antagonist (K-sparing diuretic)."
            ]
        },
        {
            "question": "A patient is prescribed Carvedilol for hypertension. What is the correct ratio of alpha-1 to beta-blockade for the oral formulation?",
            "options": [
                "1:1",
                "1:10",
                "1:50",
                "1:100"
            ],
            "correctAnswer": 1,
            "explanations": [
                "A 1:1 ratio is not found in common mixed blockers.",
                "Correct. Oral Carvedilol has a 1:10 alpha-to-beta ratio. (Labetalol is 1:3 for oral).",
                "Incorrect. The ratio is much lower than 1:50.",
                "Incorrect. Carvedilol's beta-blocking effect is only 10 times stronger than its alpha-blocking effect."
            ]
        },
        {
            "question": "Which hypertensive medication is most likely to cause peripheral edema as a side effect?",
            "options": [
                "Lisinopril",
                "Metoprolol",
                "Amlodipine",
                "Furosemide"
            ],
            "correctAnswer": 2,
            "explanations": [
                "ACE inhibitors are more likely to cause cough or angioedema, not edema.",
                "Beta-blockers can cause fatigue and bradycardia.",
                "Correct. DHP-CCBs cause precapillary vasodilation leading to fluid leakage into the tissues (edema).",
                "Furosemide is a loop diuretic used to TREAT edema."
            ]
        },
        {
            "question": "Which of the following is a contraindication for the use of ACE inhibitors?",
            "options": [
                "Diabetes",
                "History of angioedema",
                "Hyperkalemia (K+ > 5.0 mEq/L)",
                "Both B and C"
            ],
            "correctAnswer": 3,
            "explanations": [
                "Diabetes is a compelling indication for ACE inhibitors because they protect the kidneys from diabetic nephropathy.",
                "While true, it is not the only contraindication listed here.",
                "While true, it is not the only contraindication listed here.",
                "Correct. ACE inhibitors are strictly avoided in patients with a history of angioedema and in those with high potassium levels."
            ]
        }
    ],
    "Diabetes Mellitus": [
        {
            "question": "Which of the following medications has a proven benefit in reducing cardiovascular mortality in patients with Type 2 Diabetes?",
            "options": [
                "Sitagliptin",
                "Empagliflozin",
                "Glipizide",
                "Pioglitazone"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Sitagliptin (DPP-4 inhibitor) has been shown to be CV neutral (TECOS trial).",
                "Correct. Empagliflozin (Jardiance) showed significant CV death reduction in the EMPA-REG OUTCOME trial.",
                "Sulfonylureas like Glipizide do not have proven CV benefits and carry a risk of hypoglycemia.",
                "Pioglitazone has some CV benefit but is generally avoided in heart failure due to fluid retention."
            ]
        },
        {
            "question": "A patient's current A1C is 8.5% on Metformin 1000mg BID. She has a history of ASCVD. Which medication should be added next according to ADA guidelines?",
            "options": [
                "Glyburide",
                "Liraglutide",
                "Canagliflozin",
                "Either B or C"
            ],
            "correctAnswer": 3,
            "explanations": [
                "Sulfonylureas are not preferred in patients with established ASCVD.",
                "Liraglutide is a GLP-1 RA with proven CV benefit and is a correct choice for this patient.",
                "Canagliflozin is an SGLT2i with proven CV benefit and is also a correct choice.",
                "Correct. Both GLP-1 RAs and SGLT2is with proven CV benefit are first-line add-ons for patients with ASCVD."
            ]
        },
        {
            "question": "What is the mechanism of action of Sitagliptin?",
            "options": [
                "Inhibits SGLT2 in the proximal tubule",
                "Activates PPAR-gamma",
                "Inhibits DPP-4, increasing incretin levels",
                "Stimulates insulin secretion from pancreatic beta cells"
            ],
            "correctAnswer": 2,
            "explanations": [
                "This is the mechanism of SGLT2 inhibitors like Empagliflozin.",
                "This is the mechanism of Thiazolidinediones (TZDs) like Pioglitazone.",
                "Correct. DPP-4 inhibitors prevent the breakdown of GLP-1, leading to higher insulin levels in response to food.",
                "This is the mechanism of Sulfonylureas."
            ]
        },
        {
            "question": "Which insulin is considered 'ultra-rapid-acting'?",
            "options": [
                "Lispro",
                "Aspart",
                "Fiasp (faster aspart)",
                "Glulisine"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Lispro is a traditional rapid-acting insulin.",
                "Aspart is a traditional rapid-acting insulin.",
                "Correct. Fiasp is formulated with niacinamide to speed up absorption even more than standard aspart.",
                "Glulisine is a traditional rapid-acting insulin."
            ]
        },
        {
            "question": "A patient is presenting with DKA. Which of the following is the priority in initial management?",
            "options": [
                "IV Insulin bolus",
                "Fluid resuscitation with 0.9% NS",
                "Potassium replacement",
                "Bicarbonate drip"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Insulin is essential, but it must follow or be simultaneous with fluid resuscitation.",
                "Correct. The primary goal is to restore volume and perfusion first.",
                "Potassium is checked and replaced early, but fluid is the most immediate priority.",
                "Bicarbonate is rarely used and only if pH is extremely low (< 6.9)."
            ]
        }
    ],
    "Anticoagulation": [
        {
            "question": "A patient is starting Warfarin for Afib. What is the target INR for this patient?",
            "options": [
                "1.5 - 2.5",
                "2.0 - 3.0",
                "2.5 - 3.5",
                "3.0 - 4.0"
            ],
            "correctAnswer": 1,
            "explanations": [
                "This range is sub-therapeutic for Afib.",
                "Correct. 2.0-3.0 is the standard target for Afib and VTE.",
                "This is the target for mechanical mitral valves, not Afib.",
                "This range is too high and increases bleeding risk significantly."
            ]
        },
        {
            "question": "What is the antidote for Apixaban (Eliquis)?",
            "options": [
                "Protamine",
                "Idarucizumab",
                "Andexanet alfa",
                "Vitamin K"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Protamine is for Heparin reversal.",
                "Idarucizumab is specifically for Dabigatran (Pradaxa).",
                "Correct. Andexxa is the reversal agent for Factor Xa inhibitors like Apixaban and Rivaroxaban.",
                "Vitamin K is for Warfarin reversal."
            ]
        },
        {
            "question": "How long should a patient with a provoked VTE be treated with anticoagulation?",
            "options": [
                "4 weeks",
                "3 months",
                "6 months",
                "Indefinitely"
            ],
            "correctAnswer": 1,
            "explanations": [
                "4 weeks is too short and carries a high risk of recurrence.",
                "Correct. 3 months is the standard recommendation for a provoked VTE (e.g., post-surgery).",
                "6 months might be used for unprovoked cases but isn't the standard for provoked.",
                "Indefinite therapy is reserved for recurrent or high-risk unprovoked VTE."
            ]
        },
        {
            "question": "Which of the following is true regarding Enoxaparin dosing in renal impairment (CrCl < 30 mL/min) for VTE treatment?",
            "options": [
                "No change needed",
                "Reduce to 1 mg/kg once daily",
                "Reduce to 0.5 mg/kg twice daily",
                "Avoid use entirely"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Enoxaparin is renally cleared and requires adjustment.",
                "Correct. The standard 1mg/kg q12h is reduced to 1mg/kg daily.",
                "This is not a standard renal adjustment for VTE treatment.",
                "Enoxaparin can be used, but must be adjusted."
            ]
        },
        {
            "question": "Which dietary component most significantly interacts with Warfarin?",
            "options": [
                "Grapefruit juice",
                "Leafy green vegetables",
                "Dairy products",
                "High-protein meals"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Grapefruit juice affects CYP3A4, but Warfarin is primarily CYP2C9.",
                "Correct. Leafy greens are high in Vitamin K, which directly antagonizes Warfarin.",
                "Dairy does not interact significantly with Warfarin.",
                "High protein does not significantly affect INR."
            ]
        }
    ],
    "Infectious Diseases - General": [
        {
            "question": "Which of the following antibiotics exhibits concentration-dependent killing?",
            "options": [
                "Ceftriaxone",
                "Levofloxacin",
                "Piperacillin/Tazobactam",
                "Meropenem"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Ceftriaxone is a beta-lactam and is time-dependent (T > MIC).",
                "Correct. Fluoroquinolones and Aminoglycosides kill based on how high the peak is relative to MIC.",
                "Piperacillin/Tazobactam is a beta-lactam and is time-dependent.",
                "Meropenem is a carbapenem and is time-dependent."
            ]
        },
        {
            "question": "A patient with a documented anaphylactic reaction to Penicillin requires treatment for a serious infection. Which of the following is generally considered safe to use?",
            "options": [
                "Amoxicillin",
                "Cephalexin",
                "Aztreonam",
                "Ertapenem"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Amoxicillin is a penicillin and will cross-react.",
                "Cephalosporins have a low but real risk of cross-reactivity in true anaphylaxis.",
                "Correct. Aztreonam is a monobactam and does not cross-react with PCN.",
                "Carbapenems have some cross-reactivity risk and should be avoided in anaphylaxis."
            ]
        },
        {
            "question": "What is the drug of choice for treating Methicillin-Resistant Staphylococcus Aureus (MRSA) bacteremia?",
            "options": [
                "Nafcillin",
                "Cefazolin",
                "Vancomycin",
                "Linezolid"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Nafcillin only covers MSSA.",
                "Cefazolin only covers MSSA.",
                "Correct. Vancomycin is the gold standard for MRSA bacteremia.",
                "Linezolid is bacteriostatic and not preferred for primary bacteremia."
            ]
        },
        {
            "question": "Which lab parameter is used to monitor the efficacy and toxicity of Vancomycin?",
            "options": [
                "Peak levels",
                "Trough levels",
                "AUC/MIC ratio",
                "Serum Creatinine only"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Peaks are not used for Vancomycin monitoring.",
                "Troughs were the old standard but are less accurate than AUC.",
                "Correct. Modern guidelines recommend AUC/MIC of 400-600.",
                "Creatinine monitors toxicity but not efficacy."
            ]
        },
        {
            "question": "Which antibiotic is known for causing 'Red Man Syndrome' if infused too quickly?",
            "options": [
                "Clindamycin",
                "Vancomycin",
                "Gentamicin",
                "Metronidazole"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Clindamycin does not cause this infusion reaction.",
                "Correct. Vancomycin causes histamine release if infused too fast.",
                "Gentamicin is not associated with this syndrome.",
                "Metronidazole is not associated with this syndrome."
            ]
        }
    ],
    "HIV/AIDS": [
        {
            "question": "What is the standard first-line regimen for most patients with HIV?",
            "options": [
                "2 NRTIs + 1 NNRTI",
                "2 NRTIs + 1 Integrase Inhibitor (INSTI)",
                "2 NRTIs + 1 Protease Inhibitor (PI)",
                "1 NRTI + 1 INSTI"
            ],
            "correctAnswer": 1,
            "explanations": [
                "NNRTI-based regimens are now second-line or alternative.",
                "Correct. INSTI-based regimens (like Biktarvy) are first-line for nearly all patients.",
                "PI-based regimens are alternative due to metabolic side effects and drug interactions.",
                "While Dovato (2-drug) exists, it's not the 'standard' for all starts."
            ]
        },
        {
            "question": "Which HIV medication requires testing for the HLA-B*5701 allele before initiation?",
            "options": [
                "Tenofovir",
                "Abacavir",
                "Efavirenz",
                "Darunavir"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Tenofovir requires monitoring of renal function and bone density.",
                "Correct. Positive patients have a high risk of fatal hypersensitivity to Abacavir.",
                "Efavirenz is an NNRTI and does not require this test.",
                "Darunavir is a PI and does not require this test."
            ]
        },
        {
            "question": "Which side effect is commonly associated with Protease Inhibitors (PIs)?",
            "options": [
                "Vivid dreams",
                "Metabolic syndrome (dyslipidemia, insulin resistance)",
                "Renal toxicity",
                "Hypersensitivity rash"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Vivid dreams are associated with Efavirenz.",
                "Correct. PIs are known for causing hyperglycemia and lipid changes.",
                "Renal toxicity is a concern with Tenofovir DF.",
                "NRTIs like Abacavir are more associated with serious rashes."
            ]
        },
        {
            "question": "At what CD4 count should prophylaxis for Pneumocystis jirovecii pneumonia (PCP) be started?",
            "options": [
                "< 500 cells/mm3",
                "< 200 cells/mm3",
                "< 100 cells/mm3",
                "< 50 cells/mm3"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Patients are not at high risk for PCP at this CD4 count.",
                "Correct. Prophylaxis with Bactrim is started when CD4 < 200.",
                "This is the threshold for Toxoplasma prophylaxis.",
                "This is the threshold for MAC prophylaxis."
            ]
        },
        {
            "question": "Which of the following is a preferred PrEP (Pre-Exposure Prophylaxis) regimen?",
            "options": [
                "Truvada (TDF/FTC)",
                "Descovy (TAF/FTC)",
                "Apretude (Cabotegravir IM)",
                "All of the above"
            ],
            "correctAnswer": 3,
            "explanations": [
                "Truvada is the original and still widely used PrEP option.",
                "Descovy is approved for PrEP (excluding receptive vaginal sex).",
                "Apretude is the new long-acting injectable PrEP.",
                "Correct. All three are modern options for HIV prevention."
            ]
        }
    ],
    "Asthma & COPD": [
        {
            "question": "According to GINA guidelines, what is the preferred rescue medication for adults with Asthma?",
            "options": [
                "Albuterol (SABA) alone",
                "Low-dose ICS-Formoterol",
                "Salmeterol (LABA)",
                "Ipratropium (SAMA)"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Albuterol is now considered an alternative rescue therapy, as it does not address the underlying inflammation.",
                "Correct. ICS-Formoterol (e.g., Symbicort) is now preferred for rescue because it provides both bronchodilation and anti-inflammatory action.",
                "LABAs like Salmeterol should NEVER be used alone in asthma due to increased risk of asthma-related death.",
                "SAMA is used for COPD rescue but is generally not preferred for asthma."
            ]
        },
        {
            "question": "Which of the following is a long-acting muscarinic antagonist (LAMA) used in COPD?",
            "options": [
                "Salmeterol",
                "Tiotropium",
                "Budensonide",
                "Theophylline"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Salmeterol is a LABA, not a LAMA.",
                "Correct. Tiotropium (Spiriva) is a LAMA that blocks M3 receptors in the lungs.",
                "Budesonide is an Inhaled Corticosteroid (ICS).",
                "Theophylline is a methylxanthine, not a LAMA."
            ]
        },
        {
            "question": "What is the primary side effect of inhaled corticosteroids (ICS) and how can it be prevented?",
            "options": [
                "Tachycardia; use a spacer",
                "Oral Candidiasis (Thrush); rinse mouth after use",
                "Hypokalemia; take with food",
                "Cough; use a nebulizer"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Tachycardia is a side effect of SABAs, not ICS.",
                "Correct. Local immunosuppression leads to fungal overgrowth; rinsing and spitting prevents this.",
                "Hypokalemia is a risk with high-dose albuterol.",
                "While ICS can cause cough, rinsing is the most important counseling point for thrush."
            ]
        },
        {
            "question": "In the GOLD guidelines for COPD, which parameter is used to determine the 'Group' (A, B, or E)?",
            "options": [
                "FEV1 percentage",
                "Symptom score (mMRC or CAT) and exacerbation history",
                "Age and smoking history",
                "Oxygen saturation"
            ],
            "correctAnswer": 1,
            "explanations": [
                "FEV1 is used to GRADE the severity (1-4) but not to determine the treatment GROUP.",
                "Correct. Groups A, B, and E are defined by symptoms (CAT/mMRC) and risk of exacerbations.",
                "These are risk factors but not part of the GOLD grouping system.",
                "Oxygen saturation is monitored but not used for initial grouping."
            ]
        },
        {
            "question": "Which medication is a phosphodiesterase-4 (PDE4) inhibitor used in severe COPD with chronic bronchitis?",
            "options": [
                "Roflumilast",
                "Montelukast",
                "Omalizumab",
                "Dupilumab"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. Roflumilast (Daliresp) reduces exacerbations in patients with FEV1 < 50%.",
                "Montelukast is a leukotriene modifier for asthma.",
                "Omalizumab is an anti-IgE biologic for asthma.",
                "Dupilumab is an IL-4/13 inhibitor for eosinophilic asthma."
            ]
        }
    ],
    "Psychiatry - Depression": [
        {
            "question": "Which SSRI has the longest half-life and does not require tapering upon discontinuation?",
            "options": [
                "Sertraline",
                "Paroxetine",
                "Fluoxetine",
                "Escitalopram"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Sertraline has a moderate half-life and requires tapering.",
                "Paroxetine has a short half-life and the worst withdrawal symptoms.",
                "Correct. Fluoxetine has a very long half-life (up to 2 weeks for the metabolite), allowing for a natural taper.",
                "Escitalopram has a moderate half-life and requires tapering."
            ]
        },
        {
            "question": "How long is the washout period required when switching from an MAO inhibitor to an SSRI?",
            "options": [
                "3 days",
                "7 days",
                "14 days",
                "28 days"
            ],
            "correctAnswer": 2,
            "explanations": [
                "3 days is not enough for the body to regenerate the MAO enzyme.",
                "7 days is still too short and carries a high risk of Serotonin Syndrome.",
                "Correct. A 2-week washout is required to safely switch from MAOIs to other serotonergic drugs.",
                "28 days is only required if switching FROM Fluoxetine TO an MAOI."
            ]
        },
        {
            "question": "Which antidepressant is contraindicated in patients with a history of seizures or eating disorders?",
            "options": [
                "Venlafaxine",
                "Mirtazapine",
                "Bupropion",
                "Trazodone"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Venlafaxine (SNRI) does not carry this specific contraindication.",
                "Mirtazapine is actually used to help with appetite and weight gain.",
                "Correct. Bupropion lowers the seizure threshold and can cause electrolyte imbalances in bulimics, further increasing seizure risk.",
                "Trazodone is mainly used for sleep and does not have this contraindication."
            ]
        },
        {
            "question": "A patient taking Sertraline presents with tremor, hyperreflexia, and diaphoresis. What is the most likely diagnosis?",
            "options": [
                "Neuroleptic Malignant Syndrome",
                "Serotonin Syndrome",
                "Extrapyramidal Symptoms",
                "Panic Attack"
            ],
            "correctAnswer": 1,
            "explanations": [
                "NMS involves lead-pipe rigidity and hyporeflexia, whereas Serotonin Syndrome has hyperreflexia.",
                "Correct. Neuromuscular hyperreactivity (clonus, hyperreflexia) is a hallmark of Serotonin Syndrome.",
                "EPS is related to dopamine blockade, not serotonin.",
                "Panic attacks don't usually involve hyperreflexia and clonus."
            ]
        },
        {
            "question": "Which medication is commonly used as a first-line agent for both MDD and neuropathic pain?",
            "options": [
                "Citalopram",
                "Duloxetine",
                "Amitriptyline",
                "Both B and C"
            ],
            "correctAnswer": 3,
            "explanations": [
                "SSRIs like Citalopram are generally ineffective for neuropathic pain.",
                "Duloxetine is an SNRI approved for both depression and diabetic neuropathy.",
                "Amitriptyline (TCA) is effective for both but used less frequently as first-line due to side effects.",
                "Correct. Both are effective, though Duloxetine is often preferred for its better safety profile."
            ]
        }
    ],
    "Compounding & Safety": [
        {
            "question": "According to USP 797, what is the maximum beyond-use date (BUD) for a medium-risk sterile compound stored at room temperature?",
            "options": [
                "24 hours",
                "30 hours",
                "9 days",
                "14 days"
            ],
            "correctAnswer": 1,
            "explanations": [
                "24 hours is the room temperature BUD for high-risk sterile compounds.",
                "Correct. Medium-risk CSPs are good for 30 hours at room temp, 9 days refrigerated.",
                "9 days is the refrigerated BUD for medium-risk compounds.",
                "14 days is the refrigerated BUD for low-risk compounds."
            ]
        },
        {
            "question": "Which ISO class environment is required for the 'Primary Engineering Control' (e.g., Laminar Flow Hood)?",
            "options": [
                "ISO Class 5",
                "ISO Class 7",
                "ISO Class 8",
                "ISO Class 9"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. The hood itself must be ISO Class 5, containing no more than 3,520 particles per cubic meter.",
                "ISO 7 is the standard for the Buffer Room (where the hood is located).",
                "ISO 8 is the standard for the Anteroom (where gowning happens).",
                "ISO 9 is equivalent to standard room air."
            ]
        },
        {
            "question": "What is the correct order for donning Personal Protective Equipment (PPE) for sterile compounding?",
            "options": [
                "Gown, Mask, Bonnet, Shoe covers, Gloves",
                "Shoe covers, Bonnet, Mask, Hand wash, Gown, Gloves",
                "Gloves, Gown, Mask, Bonnet, Shoe covers",
                "Mask, Gown, Gloves, Shoe covers"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Incorrect. Donning should start from the bottom (dirtiest) up.",
                "Correct. Shoe covers -> Bonnet -> Mask -> Scrub -> Gown -> Sterile Gloves.",
                "Incorrect. Gloves are ALWAYS last.",
                "Incorrect. Shoe covers and bonnet must be done before the gown."
            ]
        },
        {
            "question": "Which USP chapter covers the handling of Hazardous Drugs?",
            "options": [
                "USP 795",
                "USP 797",
                "USP 800",
                "USP 71"
            ],
            "correctAnswer": 2,
            "explanations": [
                "USP 795 covers non-sterile compounding.",
                "USP 797 covers sterile compounding.",
                "Correct. USP 800 focuses on protecting personnel from hazardous drug exposure.",
                "USP 71 covers sterility testing."
            ]
        },
        {
            "question": "What is the BUD for a non-aqueous non-sterile formulation (e.g., ointment in a jar) according to USP 795?",
            "options": [
                "14 days",
                "30 days",
                "6 months",
                "1 year"
            ],
            "correctAnswer": 2,
            "explanations": [
                "14 days is for water-containing ORAL formulations.",
                "30 days is for water-containing TOPICAL formulations.",
                "Correct. Non-aqueous formulations (petrolatum-based) are good for 6 months.",
                "1 year is beyond the USP standard for compounded products."
            ]
        }
    ],
    "Oncology & Supportive Care": [
        {
            "question": "Which of the following chemotherapy agents is most associated with a dose-limiting cardiotoxicity?",
            "options": [
                "Cisplatin",
                "Doxorubicin",
                "Vincristine",
                "Cyclophosphamide"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Cisplatin is limited by nephrotoxicity and severe nausea.",
                "Correct. Anthracyclines like Doxorubicin cause irreversible cardiomyopathy. Lifetime limit is 450-550 mg/m2.",
                "Vincristine is limited by neurotoxicity (peripheral neuropathy).",
                "Cyclophosphamide is limited by hemorrhagic cystitis (bladder irritation)."
            ]
        },
        {
            "question": "Which medication is used to prevent hemorrhagic cystitis in patients receiving high-dose Cyclophosphamide or Ifosfamide?",
            "options": [
                "Amifostine",
                "Dexrazoxane",
                "Mesna",
                "Leucovorin"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Amifostine is used for cisplatin-induced nephroprotection.",
                "Dexrazoxane is used for doxorubicin-induced cardioprotection.",
                "Correct. Mesna neutralizes acrolein, the toxic metabolite in the bladder.",
                "Leucovorin is used for methotrexate rescue."
            ]
        },
        {
            "question": "A patient is experiencing 'delayed' nausea and vomiting (24+ hours after chemo). Which agent is specifically indicated for this?",
            "options": [
                "Ondansetron",
                "Aprepitant",
                "Prochlorperazine",
                "Lorazepam"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Ondansetron is best for acute nausea (within 24 hours).",
                "Correct. NK1 antagonists like Aprepitant are the standard for preventing delayed CINV.",
                "Prochlorperazine is used for breakthrough nausea.",
                "Lorazepam is used for anticipatory nausea."
            ]
        },
        {
            "question": "What is the primary side effect of Vincristine?",
            "options": [
                "Myelosuppression",
                "Peripheral Neuropathy",
                "Diarrhea",
                "Pulmonary Fibrosis"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Vincristine is unique because it is marrow-sparing (doesn't lower blood counts much).",
                "Correct. Vincristine causes severe neuropathy, often presenting as tingling or constipation (autonomic neuropathy).",
                "Diarrhea is more common with Irinotecan.",
                "Pulmonary fibrosis is associated with Bleomycin."
            ]
        },
        {
            "question": "Which medication is used to treat neutropenia by stimulating white blood cell production?",
            "options": [
                "Epoetin alfa",
                "Filgrastim",
                "Oprelvekin",
                "Ferrous sulfate"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Epoetin stimulates red blood cells.",
                "Correct. Filgrastim (Neupogen) is a G-CSF that boosts neutrophil counts.",
                "Oprelvekin stimulates platelets.",
                "Ferrous sulfate is for iron deficiency."
            ]
        }
    ],
    "Renal Disease & Electrolytes": [
        {
            "question": "A patient with CKD has a serum Potassium of 6.2 mEq/L and EKG changes (peaked T-waves). What is the first medication that should be administered?",
            "options": [
                "Sodium Polystyrene Sulfonate",
                "Insulin + Dextrose",
                "Calcium Gluconate",
                "Furosemide"
            ],
            "correctAnswer": 2,
            "explanations": [
                "SPS (Kayexalate) removes potassium but takes hours to work and is not first-line for emergencies.",
                "Insulin shifts K+ into cells, but stabilizing the heart is the priority if EKG changes are present.",
                "Correct. IV Calcium stabilizes the cardiac membrane to prevent fatal arrhythmias.",
                "Furosemide removes K+ through the urine but is not fast enough for acute EKG changes."
            ]
        },
        {
            "question": "Which phosphorus binder should be avoided in a patient with a high serum calcium level?",
            "options": [
                "Sevelamer carbonate",
                "Calcium acetate",
                "Lanthanum carbonate",
                "Sucroferric oxyhydroxide"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Sevelamer is non-calcium based and safe for hypercalcemic patients.",
                "Correct. Calcium acetate (PhosLo) adds to the calcium load and worsens hypercalcemia.",
                "Lanthanum is non-calcium based.",
                "Sucroferric is iron-based and does not contain calcium."
            ]
        },
        {
            "question": "Which equation is used to estimate Creatinine Clearance (CrCl) for drug dosing?",
            "options": [
                "MDRD",
                "CKD-EPI",
                "Cockcroft-Gault",
                "Friedewald"
            ],
            "correctAnswer": 2,
            "explanations": [
                "MDRD is used for staging CKD but not usually for drug dosing.",
                "CKD-EPI is the preferred equation for staging CKD.",
                "Correct. Cockcroft-Gault remains the gold standard for adjusting drug doses in the pharmacy.",
                "Friedewald is used to calculate LDL cholesterol."
            ]
        },
        {
            "question": "Which of the following is a common cause of pre-renal acute kidney injury?",
            "options": [
                "Aminoglycosides",
                "Dehydration/Hypovolemia",
                "Kidney stones",
                "Benign Prostatic Hyperplasia"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Aminoglycosides cause intrinsic AKI through direct tubular toxicity.",
                "Correct. Pre-renal AKI is caused by decreased blood flow (perfusion) to the kidneys.",
                "Kidney stones cause post-renal AKI (obstruction).",
                "BPH causes post-renal AKI (obstruction)."
            ]
        },
        {
            "question": "A patient has a serum Sodium of 120 mEq/L. What is the maximum recommended rate of correction in 24 hours to avoid Osmotic Demyelination Syndrome?",
            "options": [
                "4-6 mEq/L",
                "8-12 mEq/L",
                "15-20 mEq/L",
                "No limit"
            ],
            "correctAnswer": 1,
            "explanations": [
                "This is a conservative target but not the absolute upper limit.",
                "Correct. Exceeding 12 mEq/L in 24 hours can cause irreversible brain damage.",
                "This rate is dangerously high and will likely cause ODS.",
                "Sodium must always be corrected slowly to avoid brain injury."
            ]
        }
    ],
    "Gout & Osteoporosis": [
        {
            "question": "Which medication is the first-line chronic urate-lowering therapy (ULT) for gout?",
            "options": [
                "Colchicine",
                "Allopurinol",
                "Probenecid",
                "Febuxostat"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Colchicine is for acute flares, not long-term urate lowering.",
                "Correct. Allopurinol is the preferred first-line ULT for most patients.",
                "Probenecid is second-line and requires good renal function.",
                "Febuxostat is an alternative but has a boxed warning for CV safety."
            ]
        },
        {
            "question": "Which genetic test should be performed before starting Allopurinol in patients of Han Chinese or Thai descent?",
            "options": [
                "HLA-B*5701",
                "HLA-B*5801",
                "HLA-B*1502",
                "CYP2D6"
            ],
            "correctAnswer": 1,
            "explanations": [
                "HLA-B*5701 is for Abacavir.",
                "Correct. HLA-B*5801 is strongly linked to Allopurinol Hypersensitivity Syndrome.",
                "HLA-B*1502 is for Carbamazepine.",
                "CYP2D6 is for codeine/tamoxifen metabolism."
            ]
        },
        {
            "question": "What is the mechanism of action of Alendronate?",
            "options": [
                "Activates osteoblasts",
                "Inhibits osteoclast-mediated bone resorption",
                "RANKL inhibitor",
                "Parathyroid hormone analog"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Alendronate does not stimulate bone formation directly.",
                "Correct. Bisphosphonates inhibit the 'bone-eating' osteoclasts.",
                "RANKL inhibition is the mechanism of Denosumab.",
                "PTH analog is the mechanism of Teriparatide."
            ]
        },
        {
            "question": "How should oral bisphosphonates (like Risendronate) be taken to ensure absorption and prevent GI irritation?",
            "options": [
                "With a full meal",
                "At bedtime",
                "First thing in the morning with 6-8oz of plain water",
                "With milk or orange juice"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Food completely blocks the absorption of bisphosphonates.",
                "Lying down after taking it causes severe esophageal irritation.",
                "Correct. Must be taken with water on an empty stomach, and you must stay upright for 30 mins.",
                "Calcium in milk and juice blocks the drug's absorption."
            ]
        },
        {
            "question": "Which medication is a SERM (Selective Estrogen Receptor Modulator) used for osteoporosis prevention in postmenopausal women?",
            "options": [
                "Raloxifene",
                "Denosumab",
                "Calcitonin",
                "Ibandronate"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. Raloxifene (Evista) acts like estrogen in the bone to prevent loss.",
                "Denosumab is a RANKL inhibitor.",
                "Calcitonin is a hormone spray rarely used today.",
                "Ibandronate is a bisphosphonate."
            ]
        }
    ],
    "GI - GERD & PUD": [
        {
            "question": "Which of the following is a potential long-term side effect of Proton Pump Inhibitor (PPI) use?",
            "options": [
                "C. difficile-associated diarrhea",
                "Hypomagnesemia",
                "Increased risk of bone fractures",
                "All of the above"
            ],
            "correctAnswer": 3,
            "explanations": [
                "PPIs change the gut flora, increasing C. diff risk.",
                "Acid is needed for magnesium absorption; PPIs can cause low levels.",
                "Reduced calcium absorption leads to higher fracture risk.",
                "Correct. Chronic PPI use carries all of these significant risks."
            ]
        },
        {
            "question": "Which medication is used to prevent NSAID-induced ulcers by replacing protective prostaglandins?",
            "options": [
                "Sucralfate",
                "Misoprostol",
                "Famotidine",
                "Bismuth subsalicylate"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Sucralfate creates a physical 'band-aid' over existing ulcers.",
                "Correct. Misoprostol (Cytotec) is a PGE1 analog that replaces what NSAIDs deplete.",
                "Famotidine (H2RA) is used for treatment but is less effective than PPIs or Misoprostol for prevention.",
                "Bismuth is part of H. pylori therapy but doesn't replace prostaglandins."
            ]
        },
        {
            "question": "What is the standard first-line treatment for H. pylori infection (assuming low clarithromycin resistance)?",
            "options": [
                "PPI + Amoxicillin + Clarithromycin",
                "PPI + Bismuth + Metronidazole + Tetracycline",
                "PPI + Metronidazole",
                "Amoxicillin alone"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. This is the 'Triple Therapy' standard for 14 days.",
                "This is 'Quadruple Therapy', used if resistance is high or first-line fails.",
                "Two drugs are not enough to eradicate H. pylori.",
                "Single antibiotics will fail and lead to resistance."
            ]
        },
        {
            "question": "Metoclopramide is a prokinetic agent used in gastroparesis. What is its mechanism?",
            "options": [
                "Dopamine antagonist",
                "Serotonin agonist",
                "H2 receptor antagonist",
                "Prostaglandin analog"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. By blocking dopamine in the gut, it speeds up gastric emptying.",
                "Some prokinetics are serotonin agonists, but not Metoclopramide.",
                "Mechanism of Famotidine.",
                "Mechanism of Misoprostol."
            ]
        },
        {
            "question": "Which H2RA was recalled from the market due to NDMA impurities?",
            "options": [
                "Famotidine",
                "Cimetidine",
                "Ranitidine",
                "Nizatidine"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Famotidine (Pepcid) is the standard safe alternative today.",
                "Cimetidine is still available but rarely used due to drug interactions.",
                "Correct. Ranitidine (Zantac) was removed from the market globally.",
                "Nizatidine is still available but less commonly used."
            ]
        }
    ],
    "GI - IBD & Constipation": [
        {
            "question": "Which medication is first-line for maintaining remission in mild Ulcerative Colitis?",
            "options": [
                "Mesalamine",
                "Infliximab",
                "Prednisone",
                "Azathioprine"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. 5-ASAs like Mesalamine act topically in the colon and are first-line for mild UC.",
                "Infliximab is a biologic reserved for moderate-to-severe disease.",
                "Prednisone is for induction of remission (flares), not maintenance.",
                "Azathioprine is used for steroid-sparing maintenance in moderate disease."
            ]
        },
        {
            "question": "Which of the following is a stimulant laxative?",
            "options": [
                "Docusate",
                "Senna",
                "Polyethylene Glycol",
                "Psyllium"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Docusate is a stool softener ('mush'), not a stimulant.",
                "Correct. Senna (and Bisacodyl) stimulate the nerves in the gut ('push').",
                "PEG (Miralax) is an osmotic laxative.",
                "Psyllium is a bulk-forming fiber supplement."
            ]
        },
        {
            "question": "A patient on chronic opioids for pain is constipated. Which medication is specifically a peripheral mu-opioid receptor antagonist (PAMORA)?",
            "options": [
                "Lubiprostone",
                "Methylnaltrexone",
                "Linaclotide",
                "Lactulose"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Lubiprostone is a chloride channel activator.",
                "Correct. Methylnaltrexone (Relistor) reverses opioid effects in the gut ONLY.",
                "Linaclotide is a guanylate cyclase-C agonist.",
                "Lactulose is an osmotic laxative."
            ]
        },
        {
            "question": "Which biologic used in IBD is an Integrin Receptor Antagonist?",
            "options": [
                "Adalimumab",
                "Vedolizumab",
                "Ustekinumab",
                "Tofacitinib"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Adalimumab (Humira) is a TNF inhibitor.",
                "Correct. Vedolizumab (Entyvio) specifically blocks T-cell migration to the gut.",
                "Ustekinumab (Stelara) is an IL-12/23 inhibitor.",
                "Tofacitinib (Xeljanz) is a JAK inhibitor (oral pill, not biologic)."
            ]
        },
        {
            "question": "Which side effect is common with oral Iron supplements used for anemia in IBD patients?",
            "options": [
                "Diarrhea",
                "Constipation and dark stools",
                "Weight gain",
                "Tachycardia"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Iron is much more likely to cause constipation than diarrhea.",
                "Correct. Iron is notoriously constipating and turns stools a black/green color.",
                "Iron does not affect weight.",
                "Iron does not directly cause tachycardia."
            ]
        }
    ],
    "Neurology - Epilepsy": [
        {
            "question": "Which anti-epileptic drug (AED) is known for causing Gingival Hyperplasia?",
            "options": [
                "Levetiracetam",
                "Phenytoin",
                "Valproic acid",
                "Topiramate"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Levetiracetam (Keppra) is known for irritability and psychiatric side effects.",
                "Correct. Phenytoin (Dilantin) causes gum overgrowth and facial changes (hirsutism).",
                "Valproic acid causes weight gain and hair loss.",
                "Topiramate (Topamax) causes weight loss and 'word-finding' difficulty."
            ]
        },
        {
            "question": "What is the drug of choice for Absence Seizures?",
            "options": [
                "Ethosuximide",
                "Carbamazepine",
                "Phenobarbital",
                "Gabapentin"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. Ethosuximide (Zarontin) is the gold standard for absence seizures.",
                "Carbamazepine can actually WORSEN absence seizures.",
                "Phenobarbital is used for status epilepticus or generalized seizures.",
                "Gabapentin is not effective for absence seizures."
            ]
        },
        {
            "question": "Which AED requires a very slow titration to avoid the risk of Stevens-Johnson Syndrome (SJS)?",
            "options": [
                "Lamotrigine",
                "Oxcarbazepine",
                "Zonisamide",
                "Lacosamide"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. Lamotrigine (Lamictal) titration is critical to prevent the 'Lamictal Rash' (SJS).",
                "Oxcarbazepine is more known for causing hyponatremia.",
                "Zonisamide is a sulfonamide but titration is less rigid than Lamotrigine.",
                "Lacosamide is associated with PR interval prolongation."
            ]
        },
        {
            "question": "Which of the following is true regarding Valproic Acid in pregnancy?",
            "options": [
                "It is the safest AED",
                "It carries a high risk of neural tube defects",
                "It causes 'Blue Baby Syndrome'",
                "It has no known risks"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Valproic acid is the LEAST safe AED in pregnancy.",
                "Correct. It is highly teratogenic, specifically causing spina bifida.",
                "This is not a complication of Valproic Acid.",
                "It is a Category X drug for migraine prevention in pregnancy."
            ]
        },
        {
            "question": "What is the therapeutic range for total Phenytoin levels?",
            "options": [
                "5 - 10 mcg/mL",
                "10 - 20 mcg/mL",
                "50 - 100 mcg/mL",
                "1 - 2 mcg/mL"
            ],
            "correctAnswer": 1,
            "explanations": [
                "This is sub-therapeutic for most patients.",
                "Correct. 10-20 mcg/mL is the target range for total phenytoin.",
                "This would be highly toxic.",
                "This is the therapeutic range for FREE phenytoin."
            ]
        }
    ],
    "Neurology - Parkinson's & Alzheimer's": [
        {
            "question": "Why is Carbidopa administered along with Levodopa?",
            "options": [
                "To increase the half-life of Levodopa",
                "To prevent the peripheral conversion of Levodopa to Dopamine",
                "To cross the blood-brain barrier",
                "To treat tremors directly"
            ],
            "correctAnswer": 1,
            "explanations": [
                "While it helps Levodopa last, its primary job is preventing breakdown outside the brain.",
                "Correct. Carbidopa blocks the enzyme that turns Levodopa into Dopamine in the blood, reducing nausea.",
                "Carbidopa does NOT cross the BBB; only Levodopa does.",
                "Carbidopa has no effect on tremors; it just helps Levodopa reach its target."
            ]
        },
        {
            "question": "Which of the following is a Dopamine Agonist used in Parkinson's?",
            "options": [
                "Pramipexole",
                "Selegiline",
                "Entacapone",
                "Amantadine"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. Pramipexole (Mirapex) directly stimulates dopamine receptors.",
                "Selegiline is an MAO-B inhibitor.",
                "Entacapone is a COMT inhibitor.",
                "Amantadine is an antiviral used for its effect on dopamine release/reuptake."
            ]
        },
        {
            "question": "What is the mechanism of Donepezil in Alzheimer's disease?",
            "options": [
                "NMDA receptor antagonist",
                "Acetylcholinesterase inhibitor",
                "Beta-amyloid blocker",
                "Dopamine agonist"
            ],
            "correctAnswer": 1,
            "explanations": [
                "NMDA antagonism is the mechanism of Memantine (Namenda).",
                "Correct. Donepezil (Aricept) prevents the breakdown of acetylcholine in the brain.",
                "While new drugs (Aducanumab) target amyloid, Donepezil does not.",
                "Dopamine agonists are for Parkinson's, not Alzheimer's."
            ]
        },
        {
            "question": "Which side effect is most common with Cholinesterase inhibitors like Donepezil?",
            "options": [
                "Dry mouth and constipation",
                "Nausea, vomiting, and diarrhea",
                "Hypertension",
                "Insomnia"
            ],
            "correctAnswer": 1,
            "explanations": [
                "These are anticholinergic effects; Donepezil is CHOLINERGIC.",
                "Correct. Higher acetylcholine levels lead to increased GI motility and upset.",
                "Donepezil is more likely to cause bradycardia than hypertension.",
                "Insomnia can occur, but GI side effects are the most common."
            ]
        },
        {
            "question": "Which Parkinson's medication can cause a 'livedo reticularis' (skin mottling) side effect?",
            "options": [
                "Levodopa",
                "Amantadine",
                "Rasagiline",
                "Apomorphine"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Levodopa is more likely to cause dyskinesias.",
                "Correct. Amantadine is well-known for this lace-like purplish skin rash.",
                "Rasagiline is an MAO-B inhibitor.",
                "Apomorphine is an injectable 'rescue' dopamine agonist."
            ]
        }
    ],
    "Psychiatry - Schizophrenia & Bipolar": [
        {
            "question": "Which second-generation antipsychotic is the most effective but reserved for treatment-resistant cases due to the risk of agranulocytosis?",
            "options": [
                "Risperidone",
                "Quetiapine",
                "Clozapine",
                "Olanzapine"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Risperidone is effective but does not require blood monitoring for WBC.",
                "Quetiapine is commonly used but is not the 'gold standard' for resistance.",
                "Correct. Clozapine requires absolute neutrophil count (ANC) monitoring via REMS.",
                "Olanzapine is similar to Clozapine but does not cause agranulocytosis."
            ]
        },
        {
            "question": "Which antipsychotic is most likely to cause significant weight gain and metabolic syndrome?",
            "options": [
                "Ziprasidone",
                "Aripiprazole",
                "Olanzapine",
                "Lurasidone"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Ziprasidone (Geodon) is generally weight-neutral.",
                "Aripiprazole (Abilify) is generally weight-neutral.",
                "Correct. Olanzapine (Zyprexa) has some of the highest metabolic risks in the class.",
                "Lurasidone (Latuda) is weight-neutral."
            ]
        },
        {
            "question": "A patient on Lithium presents with coarse tremors, ataxia, and confusion. What should be suspected?",
            "options": [
                "Therapeutic effect",
                "Lithium toxicity",
                "Dehydration only",
                "Serotonin syndrome"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Fine hand tremors are normal; coarse tremors are a red flag for toxicity.",
                "Correct. These neurological symptoms indicate a Lithium level > 1.5 mEq/L.",
                "Dehydration can CAUSE toxicity, but these are the symptoms OF toxicity.",
                "Serotonin syndrome involves hyperreflexia and is not caused by lithium alone."
            ]
        },
        {
            "question": "Which of the following increases Lithium levels and should be avoided?",
            "options": [
                "NSAIDS (e.g., Ibuprofen)",
                "Thiazide diuretics",
                "ACE inhibitors",
                "All of the above"
            ],
            "correctAnswer": 3,
            "explanations": [
                "NSAIDS reduce lithium clearance in the kidneys.",
                "Thiazides increase lithium reabsorption, leading to toxicity.",
                "ACE inhibitors significantly increase lithium levels.",
                "Correct. All three of these common drug classes can cause Lithium toxicity."
            ]
        },
        {
            "question": "Which medication is a long-acting injectable (LAI) antipsychotic?",
            "options": [
                "Haldol Decanoate",
                "Invega Sustenna",
                "Aristada",
                "All of the above"
            ],
            "correctAnswer": 3,
            "explanations": [
                "Haldol Decanoate is a first-generation LAI.",
                "Invega Sustenna is a second-generation LAI.",
                "Aristada (Aripiprazole) is a second-generation LAI.",
                "Correct. All are used to improve adherence in schizophrenia."
            ]
        }
    ],
    "Pain Management & Migraine": [
        {
            "question": "Which opioid has a unique mechanism of inhibiting the reuptake of Norepinephrine and Serotonin?",
            "options": [
                "Morphine",
                "Tramadol",
                "Oxycodone",
                "Hydromorphone"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Morphine is a pure mu-opioid agonist.",
                "Correct. Tramadol's dual mechanism provides analgesia but also increases seizure and serotonin risk.",
                "Oxycodone is a pure mu-opioid agonist.",
                "Hydromorphone (Dilaudid) is a potent mu-opioid agonist."
            ]
        },
        {
            "question": "A patient is taking Morphine 30mg PO TID. What is the equivalent daily dose of oral Oxycodone? (Morphine 30mg PO = Oxycodone 20mg PO)",
            "options": [
                "90mg",
                "60mg",
                "45mg",
                "30mg"
            ],
            "correctAnswer": 1,
            "explanations": [
                "90mg is the total daily dose of Morphine.",
                "Correct. 90mg Morphine * (20mg Oxy / 30mg Morphine) = 60mg Oxycodone.",
                "Incorrect math.",
                "Incorrect math."
            ]
        },
        {
            "question": "Which medication is the gold standard for 'abortive' treatment of a moderate-to-severe migraine?",
            "options": [
                "Propranolol",
                "Sumatriptan",
                "Topiramate",
                "Amitriptyline"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Propranolol is used for PREVENTION, not for stopping a migraine that has started.",
                "Correct. Triptans are the first-line choice for acute (abortive) treatment.",
                "Topiramate is for PREVENTION.",
                "Amitriptyline is for PREVENTION."
            ]
        },
        {
            "question": "What is the maximum daily dose of Acetaminophen for a healthy adult?",
            "options": [
                "2000 mg",
                "3000 mg",
                "4000 mg",
                "5000 mg"
            ],
            "correctAnswer": 2,
            "explanations": [
                "This is a safe dose but not the maximum.",
                "3000mg is often recommended for the elderly or those with liver issues.",
                "Correct. 4g (4,000mg) is the absolute limit to avoid liver toxicity.",
                "5000mg is toxic and exceeds all safety guidelines."
            ]
        },
        {
            "question": "Which agent is a CGRP antagonist used for migraine prevention?",
            "options": [
                "Erenumab",
                "Ubrogepant",
                "Rizatriptan",
                "Dihydroergotamine"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. Erenumab (Aimovig) is a monthly injection for prevention.",
                "Ubrogepant (Ubrelvy) is an ORAL CGRP for acute treatment.",
                "Rizatriptan is a triptan for acute treatment.",
                "DHE is an ergot alkaloid for acute treatment."
            ]
        }
    ],
    "Immunizations": [
        {
            "question": "Which vaccine is contraindicated in patients with a severe allergy to gelatin or neomycin?",
            "options": [
                "Influenza",
                "MMR",
                "Hepatitis B",
                "Tetanus (Tdap)"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Flu vaccines are mostly egg-based, not gelatin-based.",
                "Correct. MMR and Varicella vaccines contain these stabilizers.",
                "Hep B vaccine is recombinant and doesn't contain these.",
                "Tdap does not contain gelatin or neomycin."
            ]
        },
        {
            "question": "At what age should the Shingrix (Zoster) vaccine be administered to healthy adults?",
            "options": [
                "50 years and older",
                "60 years and older",
                "65 years and older",
                "Any age"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. Shingrix is now the standard starting at age 50.",
                "60 was the age for the old, less-effective Zostavax.",
                "Incorrect.",
                "Incorrect."
            ]
        },
        {
            "question": "Which vaccine is a 'live-attenuated' vaccine?",
            "options": [
                "Pneumovax 23",
                "Flumist (Intranasal Flu)",
                "Shingrix",
                "Gardasil 9"
            ],
            "correctAnswer": 1,
            "explanations": [
                "PPSV23 is a polysaccharide (inactivated) vaccine.",
                "Correct. Flumist is the intranasal, live-attenuated version of the flu shot.",
                "Shingrix is a recombinant (inactivated) vaccine.",
                "Gardasil is a recombinant vaccine."
            ]
        },
        {
            "question": "Which pneumococcal vaccine is currently recommended for all adults 65 years and older who have not previously received a pneumococcal vaccine?",
            "options": [
                "PCV13",
                "PPSV23 alone",
                "PCV20 alone",
                "PCV15 followed by PPSV23"
            ],
            "correctAnswer": 2,
            "explanations": [
                "PCV13 is no longer the standard for healthy 65+.",
                "PPSV23 alone is not recommended as initial therapy for 65+.",
                "Correct. One dose of PCV20 (Prevnar 20) is the simplest modern recommendation.",
                "This is a valid alternative, but PCV20 alone is often preferred for simplicity."
            ]
        },
        {
            "question": "Which vaccine should be administered during every pregnancy (between weeks 27-36)?",
            "options": [
                "MMR",
                "Tdap",
                "Varicella",
                "HPV"
            ],
            "correctAnswer": 1,
            "explanations": [
                "MMR is a LIVE vaccine and is contraindicated in pregnancy.",
                "Correct. Tdap is given to protect the baby from whooping cough via maternal antibodies.",
                "Varicella is a LIVE vaccine and is contraindicated in pregnancy.",
                "HPV is not recommended during pregnancy."
            ]
        }
    ],
    "Toxicology & Antidotes": [
        {
            "question": "What is the antidote for a Benzodiazepine overdose?",
            "options": [
                "Naloxone",
                "Flumazenil",
                "Physostigmine",
                "Acetylcysteine"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Naloxone is for opioids.",
                "Correct. Flumazenil reverses benzos but can cause seizures in chronic users.",
                "Physostigmine is for anticholinergic overdose.",
                "Acetylcysteine is for acetaminophen overdose."
            ]
        },
        {
            "question": "A patient presents with 'wet' symptoms (salivation, lacrimation, urination, defecation). Which poisoning should be suspected?",
            "options": [
                "Atropine",
                "Organophosphates (Cholinergic crisis)",
                "Opioids",
                "Tricyclic antidepressants"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Atropine causes 'dry' symptoms.",
                "Correct. Organophosphates (insecticides) cause SLUDGE symptoms.",
                "Opioids cause miosis and constipation, not 'wet' symptoms.",
                "TCAs cause 'dry' anticholinergic symptoms."
            ]
        },
        {
            "question": "What is the antidote for Digoxin toxicity?",
            "options": [
                "DigiFab",
                "Vitamin K",
                "Glucagon",
                "Protamine"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. DigiFab antibodies bind to digoxin for excretion.",
                "Vitamin K is for Warfarin.",
                "Glucagon is for Beta-blocker or CCB overdose.",
                "Protamine is for Heparin."
            ]
        },
        {
            "question": "Within what timeframe is N-acetylcysteine (NAC) most effective for Acetaminophen overdose?",
            "options": [
                "2 hours",
                "8 hours",
                "24 hours",
                "48 hours"
            ],
            "correctAnswer": 1,
            "explanations": [
                "2 hours is great, but the critical window is 8 hours.",
                "Correct. NAC is nearly 100% effective if given within 8 hours.",
                "Effectiveness drops after 8-10 hours.",
                "At 48 hours, NAC is much less effective at preventing liver failure."
            ]
        },
        {
            "question": "Which of the following is the antidote for Iron toxicity?",
            "options": [
                "Deferoxamine",
                "Succimer",
                "Edetate calcium disodium",
                "Penicillamine"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. Deferoxamine (Desferal) chelates iron and turns urine 'vin-rose' (pink).",
                "Succimer is for Lead poisoning.",
                "Calcium disodium EDTA is for Lead.",
                "Penicillamine is for Wilson's disease (Copper)."
            ]
        }
    ],
    "Federal Law & Regulatory": [
        {
            "question": "Under the CSA, which schedule is a drug with a high potential for abuse but has currently accepted medical use in treatment (e.g., Oxycodone)?",
            "options": [
                "Schedule I",
                "Schedule II",
                "Schedule III",
                "Schedule IV"
            ],
            "correctAnswer": 1,
            "explanations": [
                "C-I drugs (like Heroin) have NO accepted medical use.",
                "Correct. C-II drugs have use but carry severe risk of dependence.",
                "C-III drugs have lower abuse potential than C-II.",
                "C-IV drugs (like Benzos) have lower abuse potential than C-III."
            ]
        },
        {
            "question": "What is the maximum amount of Pseudoephedrine that can be sold to a single individual in a 30-day period under the Combat Methamphetamine Epidemic Act?",
            "options": [
                "3.6 grams",
                "7.5 grams",
                "9.0 grams",
                "No limit"
            ],
            "correctAnswer": 2,
            "explanations": [
                "3.6g is the DAILY limit.",
                "7.5g is the 30-day limit for MAIL-ORDER purchases.",
                "Correct. 9.0g is the 30-day limit for retail (pharmacy) purchases.",
                "Limits were established to prevent meth production."
            ]
        },
        {
            "question": "Which form is required for a pharmacy to register with the DEA to dispense controlled substances?",
            "options": [
                "DEA Form 222",
                "DEA Form 106",
                "DEA Form 224",
                "DEA Form 41"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Form 222 is for ordering C-IIs.",
                "Form 106 is for reporting theft or loss.",
                "Correct. Form 224 is for initial registration of a pharmacy.",
                "Form 41 is for disposal of controlled substances."
            ]
        },
        {
            "question": "According to federal law, how long must prescription records be kept?",
            "options": [
                "1 year",
                "2 years",
                "5 years",
                "10 years"
            ],
            "correctAnswer": 1,
            "explanations": [
                "1 year is too short per federal standards.",
                "Correct. Federal law requires 2 years of record-keeping.",
                "Many states require 5-10 years, but federal is 2 years.",
                "Medicare records must be kept for 10 years."
            ]
        },
        {
            "question": "Which act required drug manufacturers to prove both safety and efficacy before a drug could be marketed?",
            "options": [
                "Pure Food and Drug Act (1906)",
                "Federal Food, Drug, and Cosmetic Act (1938)",
                "Kefauver-Harris Amendment (1962)",
                "Durham-Humphrey Amendment (1951)"
            ],
            "correctAnswer": 2,
            "explanations": [
                "1906 Act only prohibited misbranding and adulteration.",
                "1938 Act only required proof of SAFETY.",
                "Correct. 1962 Amendment was the first to require proof of EFFICACY.",
                "1951 established the distinction between OTC and Prescription."
            ]
        }
    ],
    "Calculations - Advanced": [
        {
            "question": "Calculate the mEq of Calcium in 10mL of 10% Calcium Gluconate (MW = 430, Valence = 2).",
            "options": [
                "4.65 mEq",
                "9.3 mEq",
                "4.3 mEq",
                "2.3 mEq"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. 10% = 1000mg/10mL. mEq = (1000 * 2) / 430 = 4.65.",
                "Incorrect math.",
                "Incorrect math.",
                "Incorrect math."
            ]
        },
        {
            "question": "A patient is to receive 5mcg/kg/min of dopamine. The patient weighs 154 lbs. The concentration is 400mg in 250mL D5W. What is the rate in mL/hr?",
            "options": [
                "5 mL/hr",
                "13.1 mL/hr",
                "21 mL/hr",
                "42 mL/hr"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Incorrect math.",
                "Correct. 154lbs=70kg. Dose=350mcg/min=21mg/hr. Conc=1.6mg/mL. 21/1.6=13.1 mL/hr.",
                "Incorrect math.",
                "Incorrect math."
            ]
        },
        {
            "question": "What is the ANC for a patient with a WBC of 2,500, 30% Neutrophils, and 5% Bands?",
            "options": [
                "750",
                "875",
                "125",
                "350"
            ],
            "correctAnswer": 1,
            "explanations": [
                "This only accounts for segmented neutrophils.",
                "Correct. ANC = WBC * (%Segs + %Bands). 2500 * (0.30 + 0.05) = 875.",
                "Incorrect math.",
                "Incorrect math."
            ]
        },
        {
            "question": "A TPN requires 60mEq of Sodium. You have 23.4% NaCl (4mEq/mL). How many mL do you add?",
            "options": [
                "4 mL",
                "15 mL",
                "30 mL",
                "60 mL"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Incorrect math.",
                "Correct. 60mEq / 4mEq per mL = 15 mL.",
                "Incorrect math.",
                "Incorrect math."
            ]
        },
        {
            "question": "How many grams of Dextrose are in 1 Liter of D5W?",
            "options": [
                "5g",
                "50g",
                "500g",
                "5000g"
            ],
            "correctAnswer": 1,
            "explanations": [
                "This is for 100mL.",
                "Correct. 5% = 5g/100mL = 50g per 1000mL.",
                "Incorrect math.",
                "Incorrect math."
            ]
        }
    ],
    "OTC & Self-Care": [
        {
            "question": "Which OTC product is first-line for treating a dry, non-productive cough?",
            "options": [
                "Guaifenesin",
                "Dextromethorphan",
                "Pseudoephedrine",
                "Diphenhydramine"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Guaifenesin is for 'wet' coughs to help thin mucus.",
                "Correct. Dextromethorphan (DM) is the standard cough suppressant.",
                "Pseudoephedrine is for congestion, not cough.",
                "While sedating, it is not the primary choice for cough suppression."
            ]
        },
        {
            "question": "A patient asks for an OTC recommendation for a cold sore (herpes simplex labialis). Which is the only FDA-approved OTC antiviral?",
            "options": [
                "Abreva (Docosanol)",
                "Carmex",
                "Orajel",
                "Bactine"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. Abreva inhibits the virus from entering healthy cells.",
                "Carmex is for moisture only.",
                "Orajel provides pain relief but doesn't treat the virus.",
                "Bactine is for minor cuts."
            ]
        },
        {
            "question": "What is the maximum duration for using an OTC topical nasal decongestant like Oxymetazoline (Afrin)?",
            "options": [
                "24 hours",
                "3 days",
                "7 days",
                "14 days"
            ],
            "correctAnswer": 1,
            "explanations": [
                "One day is fine, but you can use it slightly longer.",
                "Correct. Using Afrin for more than 3 days causes severe rebound congestion.",
                "One week is way too long for Afrin.",
                "Two weeks would guarantee dependency and rebound symptoms."
            ]
        },
        {
            "question": "Which OTC ingredient is used to treat head lice?",
            "options": [
                "Permethrin 1%",
                "Hydrocortisone 1%",
                "Terbinafine",
                "Selenium sulfide"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. Permethrin (Nix) is the standard first-line for lice.",
                "Hydrocortisone is for itching/rashes.",
                "Terbinafine (Lamisil) is for fungal infections.",
                "Selenium sulfide is for dandruff."
            ]
        },
        {
            "question": "A patient needs an OTC pain reliever but has a history of a stomach ulcer. Which is the safest choice?",
            "options": [
                "Ibuprofen",
                "Naproxen",
                "Acetaminophen",
                "Aspirin"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Ibuprofen (Advil) can cause or worsen ulcers.",
                "Naproxen (Aleve) is an NSAID with high GI risk.",
                "Correct. Tylenol is safe for the stomach as it doesn't affect the gut lining.",
                "Aspirin is highly irritating to the GI tract."
            ]
        }
    ],
    "Critical Care": [
        {
            "question": "Which vasopressor is generally considered first-line for septic shock?",
            "options": [
                "Dopamine",
                "Norepinephrine",
                "Epinephrine",
                "Phenylephrine"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Dopamine is associated with more arrhythmias than Norepinephrine.",
                "Correct. Norepinephrine (Levophed) is first-line per the Surviving Sepsis Campaign.",
                "Epinephrine is usually second-line or for anaphylaxis.",
                "Phenylephrine is reserved for patients where Norepinephrine causes tachycardia."
            ]
        },
        {
            "question": "Which sedative used in the ICU can cause a 'propofol-related infusion syndrome' (PRIS)?",
            "options": [
                "Midazolam",
                "Dexmedetomidine",
                "Propofol",
                "Ketamine"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Midazolam (Versed) is a benzo; it doesn't cause PRIS.",
                "Dexmedetomidine (Precedex) doesn't cause PRIS.",
                "Correct. Propofol (Diprivan) can cause this rare, fatal metabolic collapse.",
                "Ketamine doesn't cause PRIS."
            ]
        },
        {
            "question": "What is the mechanism of Dexmedetomidine?",
            "options": [
                "GABA agonist",
                "Alpha-2 adrenergic agonist",
                "Dopamine antagonist",
                "NMDA antagonist"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Mechanism of benzos and propofol.",
                "Correct. Precedex provides sedation while the patient remains arousable.",
                "Mechanism of antipsychotics.",
                "Mechanism of Ketamine."
            ]
        },
        {
            "question": "A patient in the ICU has a stress ulcer. Which of the following is an appropriate prophylaxis option?",
            "options": [
                "PPI (e.g., Pantoprazole)",
                "H2RA (e.g., Famotidine)",
                "Sucralfate",
                "Either A or B"
            ],
            "correctAnswer": 3,
            "explanations": [
                "PPIs are effective for prophylaxis but may increase pneumonia risk.",
                "H2RAs are commonly used for prophylaxis.",
                "Sucralfate is less effective and cumbersome in the ICU.",
                "Correct. Both are standard, with H2RAs often favored for slightly lower pneumonia risk."
            ]
        },
        {
            "question": "Which electrolyte abnormality is a common side effect of the paralytic Succinylcholine?",
            "options": [
                "Hypokalemia",
                "Hyperkalemia",
                "Hypomagnesemia",
                "Hypernatremia"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Incorrect; it causes the opposite.",
                "Correct. Succinylcholine can cause a rapid, dangerous rise in potassium.",
                "Incorrect.",
                "Incorrect."
            ]
        }
    ],
    "Women's Health": [
        {
            "question": "Which form of contraception is the most effective for a patient who frequently forgets to take a daily pill?",
            "options": [
                "COC (Combination Oral Contraceptive)",
                "NuvaRing",
                "Nexplanon (Implant)",
                "The Patch"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Pills have a high failure rate if even one dose is missed.",
                "NuvaRing is monthly, better than daily, but still depends on the user.",
                "Correct. Implants are 'set and forget' and are the most effective method.",
                "The patch is weekly, still prone to user error."
            ]
        },
        {
            "question": "Within what timeframe should Plan B One-Step (Levonorgestrel) be taken for maximum efficacy after unprotected intercourse?",
            "options": [
                "24 hours",
                "72 hours",
                "5 days",
                "10 days"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Earlier is better, but it is effective up to 72 hours.",
                "Correct. Plan B's labeled window is 72 hours (3 days).",
                "Ella (Ulipristal) is better for the 3-5 day window.",
                "Incorrect; no OTC product is effective at 10 days."
            ]
        },
        {
            "question": "Which medication is first-line for treating gestational diabetes if lifestyle changes are insufficient?",
            "options": [
                "Metformin",
                "Glyburide",
                "Insulin",
                "Sitagliptin"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Metformin is used but is not considered first-line by most guidelines.",
                "Glyburide is associated with more neonatal hypoglycemia.",
                "Correct. Insulin is the gold standard because it doesn't cross the placenta.",
                "DPP-4s are not used in pregnancy."
            ]
        },
        {
            "question": "Which antibiotic is the drug of choice for treating syphilis in a pregnant woman?",
            "options": [
                "Doxycycline",
                "Azithromycin",
                "Penicillin G Benzathine",
                "Ceftriaxone"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Doxy is contraindicated in pregnancy.",
                "Azithromycin is not effective for syphilis.",
                "Correct. Penicillin is the only approved treatment; allergy requires desensitization.",
                "Ceftriaxone is not first-line for syphilis."
            ]
        },
        {
            "question": "What is the black box warning associated with Estrogen-containing contraceptives?",
            "options": [
                "Risk of suicide",
                "Risk of bone fractures",
                "Risk of serious cardiovascular events in smokers > 35 years old",
                "Risk of kidney failure"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Incorrect.",
                "Depo-Provera has a BBW for bone loss, not COCs.",
                "Correct. Estrogen + Smoking + Age 35+ = high risk of blood clots and stroke.",
                "Incorrect."
            ]
        }
    ],
    "Thyroid & Endocrine": [
        {
            "question": "How should Levothyroxine (Synthroid) be taken for optimal absorption?",
            "options": [
                "With breakfast",
                "With a glass of milk",
                "On an empty stomach, 30-60 minutes before breakfast",
                "At bedtime with a snack"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Food significantly decreases absorption.",
                "Calcium in milk blocks absorption.",
                "Correct. It needs a high-acid, empty stomach to be absorbed correctly.",
                "If taken at bedtime, it must be 3-4 hours after the last meal."
            ]
        },
        {
            "question": "Which medication is used to treat hyperthyroidism and is preferred during the first trimester of pregnancy?",
            "options": [
                "Methimazole",
                "Propylthiouracil (PTU)",
                "Levothyroxine",
                "Radioactive Iodine"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Methimazole is preferred in 2nd and 3rd trimesters but causes birth defects in 1st.",
                "Correct. PTU is preferred in the 1st trimester due to less teratogenicity.",
                "Levothyroxine treats HYPOthyroidism.",
                "RAI is strictly contraindicated in pregnancy."
            ]
        },
        {
            "question": "A patient with hypothyroidism has a high TSH level and low Free T4. What does this indicate?",
            "options": [
                "The dose of Levothyroxine is too high",
                "The dose of Levothyroxine is too low",
                "The patient has hyperthyroidism",
                "The lab result is normal"
            ],
            "correctAnswer": 1,
            "explanations": [
                "If the dose were too high, TSH would be LOW.",
                "Correct. High TSH means the body is begging for more hormone.",
                "Incorrect; TSH would be suppressed (low) in hyperthyroidism.",
                "Incorrect; TSH should be in the normal range (0.5 - 5)."
            ]
        },
        {
            "question": "What is the primary treatment for Central Diabetes Insipidus?",
            "options": [
                "Hydrochlorothiazide",
                "Desmopressin (DDAVP)",
                "Furosemide",
                "Vasopressin"
            ],
            "correctAnswer": 1,
            "explanations": [
                "HCTZ is used for NEPHROGENIC DI.",
                "Correct. DDAVP replaces the missing ADH (antidiuretic hormone).",
                "Furosemide would worsen the dehydration in DI.",
                "Vasopressin is used in shock; DDAVP is more selective for DI treatment."
            ]
        },
        {
            "question": "Which corticosteroid has the highest mineralocorticoid (salt-retaining) potency and is used for Addison's disease?",
            "options": [
                "Dexamethasone",
                "Methylprednisolone",
                "Fludrocortisone",
                "Prednisone"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Dexamethasone has ZERO mineralocorticoid activity.",
                "Methylprednisolone has very low mineralocorticoid activity.",
                "Correct. Fludrocortisone is used specifically to replace aldosterone.",
                "Prednisone has moderate activity but is not enough for Addison's."
            ]
        }
    ],
    "Infectious Diseases - Specific": [
        {
            "question": "Which antibiotic is first-line for a healthy adult with Community-Acquired Pneumonia (CAP) as an outpatient?",
            "options": [
                "Amoxicillin 1g TID",
                "Doxycycline",
                "Macrolide (if resistance < 25%)",
                "All of the above"
            ],
            "correctAnswer": 3,
            "explanations": [
                "Amoxicillin is a first-line monotherapy option for healthy patients.",
                "Doxycycline is a first-line monotherapy option for healthy patients.",
                "Macrolides are only first-line if local resistance is low.",
                "Correct. All three are valid first-line choices per the ATS/IDSA guidelines."
            ]
        },
        {
            "question": "A 25-year-old female presents with an uncomplicated UTI. Which is an appropriate first-line choice?",
            "options": [
                "Nitrofurantoin 100mg BID x 5 days",
                "Ciprofloxacin 250mg BID x 3 days",
                "Amoxicillin 500mg TID x 7 days",
                "Moxifloxacin 400mg daily x 3 days"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. Nitrofurantoin (Macrobid) is the preferred first-line agent for cystitis.",
                "Fluoroquinolones are now second-line for simple UTIs due to side effect risks.",
                "Amoxicillin is not effective enough due to high E. coli resistance.",
                "Moxifloxacin is NOT used for UTIs because it doesn't concentrate in urine."
            ]
        },
        {
            "question": "Which pathogen is the most common cause of bacterial meningitis in adults?",
            "options": [
                "Neisseria meningitidis",
                "Streptococcus pneumoniae",
                "Listeria monocytogenes",
                "Haemophilus influenzae"
            ],
            "correctAnswer": 1,
            "explanations": [
                "N. meningitidis is common in teens/college students but not the absolute #1 in all adults.",
                "Correct. S. pneumo is the most common cause of adult bacterial meningitis.",
                "Listeria is mostly a concern for neonates and adults > 50.",
                "H. flu is less common now due to vaccinations."
            ]
        },
        {
            "question": "What is the drug of choice for treating a C. difficile infection (first episode)?",
            "options": [
                "Oral Metronidazole",
                "Oral Vancomycin 125mg QID",
                "Fidaxomicin 200mg BID",
                "Either B or C"
            ],
            "correctAnswer": 3,
            "explanations": [
                "Metronidazole is no longer preferred for initial episodes of C. diff.",
                "Vancomycin is a preferred first-line therapy.",
                "Fidaxomicin is a preferred first-line therapy.",
                "Correct. Both are superior to Metronidazole for initial treatment."
            ]
        },
        {
            "question": "Which of the following is used for 'Silver' (pseudomonal) coverage in burn patients?",
            "options": [
                "Silver Sulfadiazine",
                "Mupirocin",
                "Bacitracin",
                "Hydrocortisone"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. Silvadene provides excellent topical pseudomonal coverage for burns.",
                "Mupirocin is for MRSA or impetigo.",
                "Bacitracin is for minor scrapes.",
                "Steroids slow down wound healing and increase infection risk in burns."
            ]
        }
    ],
    "Pharmacokinetics": [
        {
            "question": "What does 'Clearance' represent in pharmacokinetics?",
            "options": [
                "The amount of drug removed from the body per unit time",
                "The volume of plasma cleared of drug per unit time",
                "The time it takes for drug concentration to decrease by half",
                "The total amount of drug in the body"
            ],
            "correctAnswer": 1,
            "explanations": [
                "This describes the elimination rate (mg/hr).",
                "Correct. Clearance is a volume/time measure (e.g., mL/min).",
                "Mechanism of half-life.",
                "Mechanism of total body load."
            ]
        },
        {
            "question": "A drug has a half-life of 4 hours. How long will it take to reach steady-state?",
            "options": [
                "8 hours",
                "12 hours",
                "20 hours",
                "40 hours"
            ],
            "correctAnswer": 2,
            "explanations": [
                "8 hours is only 2 half-lives.",
                "12 hours is only 3 half-lives.",
                "Correct. 4-5 half-lives are needed (4 * 5 = 20 hours).",
                "10 half-lives is way beyond steady-state."
            ]
        },
        {
            "question": "If a drug follows zero-order kinetics, what happens to the amount of drug eliminated over time?",
            "options": [
                "A constant percentage is eliminated",
                "A constant amount is eliminated",
                "Elimination increases as concentration increases",
                "Elimination is unpredictable"
            ],
            "correctAnswer": 1,
            "explanations": [
                "This describes first-order kinetics (the most common).",
                "Correct. Like a slow drain, only 10mg/hr is removed no matter how much is there.",
                "Incorrect for zero-order.",
                "Elimination is predictable, just constant."
            ]
        },
        {
            "question": "What is the 'Volume of Distribution' (Vd) of a drug that is highly lipophilic and widely distributed into tissues?",
            "options": [
                "Small (< 5 L)",
                "Moderate (15 - 20 L)",
                "Large (> 40 L)",
                "Exactly 3 L"
            ],
            "correctAnswer": 2,
            "explanations": [
                "Small Vd means the drug stays in the blood.",
                "Moderate Vd means it distributes to extra-cellular fluid.",
                "Correct. Large Vd means it hides in fat and tissues outside the blood.",
                "Exactly 3L is the plasma volume."
            ]
        },
        {
            "question": "Which organ is the primary site of 'first-pass' metabolism?",
            "options": [
                "Kidney",
                "Liver",
                "Small Intestine",
                "Lungs"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Kidneys are primary for EXCRETION, not first-pass metabolism.",
                "Correct. The liver processes drugs from the gut before they reach the rest of the body.",
                "While some metabolism happens in the gut wall, the liver is the main site.",
                "Lungs do not perform significant first-pass metabolism."
            ]
        }
    ],
    "Hematology & Transplant": [
        {
            "question": "Which of the following is used to treat Iron-deficiency anemia and should be taken with Vitamin C to increase absorption?",
            "options": [
                "Cyanocobalamin",
                "Ferrous Sulfate",
                "Folic Acid",
                "Epoetin Alfa"
            ],
            "correctAnswer": 1,
            "explanations": [
                "B12 is for macrocytic anemia.",
                "Correct. Oral iron (Ferrous Sulfate) is absorbed best in an acidic environment.",
                "Folic acid is for megaloblastic anemia.",
                "Epoetin alfa is for anemia of chronic disease/kidney failure."
            ]
        },
        {
            "question": "What is the drug of choice for preventing a sickle cell crisis in children and adults?",
            "options": [
                "Hydroxyurea",
                "Warfarin",
                "Aspirin",
                "Cyclosporine"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. Hydroxyurea (Hydrea) increases HbF, which keeps cells from sickling.",
                "Warfarin does not prevent the sickling process.",
                "Aspirin is for platelet inhibition, not sickle cell prevention.",
                "Cyclosporine is an immunosuppressant."
            ]
        },
        {
            "question": "Which immunosuppressant is a Calcineurin Inhibitor commonly used in organ transplant?",
            "options": [
                "Tacrolimus",
                "Mycophenolate Mofetil",
                "Azathioprine",
                "Sirolimus"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. Tacrolimus (Prograf) is the cornerstone of transplant immunosuppression.",
                "MMF is an antimetabolite (antiproliferative).",
                "Azathioprine is an antimetabolite.",
                "Sirolimus is an mTOR inhibitor."
            ]
        },
        {
            "question": "Which side effect is a major concern with the use of Tacrolimus?",
            "options": [
                "Nephrotoxicity",
                "Hypertension",
                "New-onset Diabetes",
                "All of the above"
            ],
            "correctAnswer": 3,
            "explanations": [
                "Tacrolimus is highly toxic to the kidneys.",
                "Hypertension is a very common side effect.",
                "Tacrolimus is notorious for increasing blood sugar (NODAT).",
                "Correct. Tacrolimus requires very careful monitoring because of all these risks."
            ]
        },
        {
            "question": "A patient is taking Mycophenolate Mofetil (CellCept). What is a common GI side effect?",
            "options": [
                "Constipation",
                "Diarrhea",
                "Weight gain",
                "Increased appetite"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Mycophenolate is much more likely to cause diarrhea than constipation.",
                "Correct. Severe diarrhea is the most common reason for dose reduction in MMF.",
                "Incorrect.",
                "Incorrect."
            ]
        }
    ],
    "Common Lab Values & Hemodynamics": [
        {
            "question": "What is the normal range for Serum Creatinine in a healthy adult?",
            "options": [
                "0.6 - 1.2 mg/dL",
                "3.5 - 5.0 mg/dL",
                "135 - 145 mg/dL",
                "10 - 20 mg/dL"
            ],
            "correctAnswer": 0,
            "explanations": [
                "Correct. This is the standard reference range for SCr.",
                "This is the normal range for Potassium.",
                "This is the normal range for Sodium.",
                "This is the normal range for BUN."
            ]
        },
        {
            "question": "A patient has a Procalcitonin level of 2.5 ng/mL. What does this likely indicate?",
            "options": [
                "Viral infection",
                "Bacterial sepsis",
                "Fungal infection",
                "Normal finding"
            ],
            "correctAnswer": 1,
            "explanations": [
                "Procalcitonin is typically low in viral infections.",
                "Correct. Levels > 0.5 ng/mL are strongly suggestive of bacterial infection/sepsis.",
                "Fungal infections do not typically raise PCT as much as bacteria.",
                "Normal levels are < 0.1 ng/mL."
            ]
        },
        {
            "question": "Which lab value is the most specific for diagnosing an acute myocardial infarction?",
            "options": [
                "Creatine Kinase (CK-MB)",
                "Troponin I or T",
                "Myoglobin",
                "Lactate Dehydrogenase (LDH)"
            ],
            "correctAnswer": 1,
            "explanations": [
                "CK-MB was used previously but is less specific than Troponin.",
                "Correct. Troponins are highly sensitive and specific for cardiac muscle damage.",
                "Myoglobin rises early but is not specific to the heart.",
                "LDH is a very non-specific marker of cell damage."
            ]
        },
        {
            "question": "What is the 'Mean Arterial Pressure' (MAP) goal for a patient in septic shock?",
            "options": [
                ">= 50 mmHg",
                ">= 65 mmHg",
                ">= 80 mmHg",
                ">= 100 mmHg"
            ],
            "correctAnswer": 1,
            "explanations": [
                "50 mmHg is too low to ensure adequate organ perfusion.",
                "Correct. 65 mmHg is the standard goal recommended by the Surviving Sepsis Campaign.",
                "While higher is fine, 65 is the minimum evidence-based target.",
                "Targets this high often require excessive vasopressors without added benefit."
            ]
        },
        {
            "question": "Which of the following is a hallmark lab finding in Heparin-Induced Thrombocytopenia (HIT)?",
            "options": [
                "Platelet count increase by 50%",
                "Platelet count decrease by > 50%",
                "White blood cell count decrease",
                "Hemoglobin decrease"
            ],
            "correctAnswer": 1,
            "explanations": [
                "HIT causes a drop in platelets, not an increase.",
                "Correct. A >50% drop from baseline after heparin exposure is the classic '4T' score finding.",
                "HIT specifically affects platelets via antibodies.",
                "Hemoglobin is not directly affected by the HIT mechanism."
            ]
        }
    ]
};
