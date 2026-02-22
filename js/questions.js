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
    ]
