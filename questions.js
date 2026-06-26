const QUESTIONS = [
  {
    "id": 1,
    "chapter": 1,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "A 6-year-old needs an urgent laceration repair. The accompanying babysitter cannot reach either parent, and the wound is bleeding but not limb-threatening. What is the most appropriate next step regarding consent?",
    "options": {
      "A": "Proceed immediately under the emergency exception since any laceration qualifies as an emergency",
      "B": "Document attempts to reach the legal guardian and obtain the decision-maker before proceeding",
      "C": "Have the babysitter sign the consent form because she is the adult present with the child",
      "D": "Obtain the child's own assent and treat it as legally sufficient consent for repair"
    },
    "answer": "B",
    "explanation": "A non-urgent repair can wait for proper consent, so attempts to reach the guardian should be documented and the legal decision-maker contacted. The emergency exception covers only life or limb threats. A babysitter usually lacks consent authority, and a child's assent carries no legal weight."
  },
  {
    "id": 2,
    "chapter": 1,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "During a procedure note, a clinician must select the appropriate documentation for a pediatric patient's weight. Which practice best prevents dosing errors?",
    "options": {
      "A": "Record the weight in pounds since families report weight that way at home",
      "B": "Record the weight in kilograms only, never in pounds, on every entry",
      "C": "Estimate weight by age and omit recording the method that was used",
      "D": "Record both pounds and kilograms to give clinicians a flexible choice"
    },
    "answer": "B",
    "explanation": "Pediatric dosing is weight-driven, and recording kilograms only eliminates the tenfold and twofold errors from pound-kilogram confusion. Pounds invite that error, omitting an estimation method is poor documentation, and dual units reintroduce confusion at the bedside."
  },
  {
    "id": 3,
    "chapter": 1,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "A neonate who is 5 weeks old requires umbilical-area antisepsis before a sterile procedure. Which antiseptic choice and caveat is most appropriate?",
    "options": {
      "A": "Povidone-iodine, wiped off afterward to limit transcutaneous iodine absorption in the neonate",
      "B": "Plain alcohol alone, since it dries quickly and avoids any chemical burn risk",
      "C": "Chlorhexidine-alcohol, the agent of choice for nearly all pediatric skin antisepsis",
      "D": "Chlorhexidine without alcohol, applied without friction to protect immature skin"
    },
    "answer": "A",
    "explanation": "Chlorhexidine is not recommended under two months due to chemical burn risk, so povidone-iodine is substituted and removed afterward to limit iodine absorption through thin skin. Chlorhexidine is contraindicated here, alcohol alone gives no residual activity, and friction is part of correct antisepsis."
  },
  {
    "id": 4,
    "chapter": 1,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "Just before a chest tube insertion in a stable child, the team is positioned and the site is prepped. What best describes a correctly performed time-out?",
    "options": {
      "A": "One person charts while another preps as the operator silently confirms the side",
      "B": "The entire team pauses to verbally confirm patient, procedure, site, and positioning",
      "C": "The operator alone verifies the patient name against the consent form quietly",
      "D": "The time-out is skipped because chest tube laterality is obvious on exam"
    },
    "answer": "B",
    "explanation": "A time-out is an active whole-team pause confirming correct patient, procedure, site, and positioning using two identifiers. A divided team is not a true time-out, solo silent verification fails the standard, and laterality errors are prevented only by active spoken confirmation against imaging and consent."
  },
  {
    "id": 5,
    "chapter": 1,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "Which procedure mandates full sterile technique with maximal sterile barrier precautions rather than clean technique?",
    "options": {
      "A": "Peripheral intravenous cannulation in a febrile but stable toddler",
      "B": "Nasogastric tube placement for gastric decompression in an infant",
      "C": "Simple laceration repair of a clean forearm wound in a child",
      "D": "Lumbar puncture performed to evaluate a possible meningitis"
    },
    "answer": "D",
    "explanation": "Lumbar puncture breaches a sterile body compartment and requires sterile technique with maximal barrier precautions. Peripheral IV cannulation, simple laceration repair, and nasogastric tube placement are managed with clean technique, though all still benefit from meticulous skin antisepsis."
  },
  {
    "id": 6,
    "chapter": 1,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "A nurse notices the consent lists the wrong ear for a procedure but hesitates to speak up to the senior physician. Which tool best scaffolds her escalation?",
    "options": {
      "A": "The DOPE mnemonic used to troubleshoot a deteriorating intubated patient",
      "B": "The MR SOPA sequence applied when chest rise is inadequate during ventilation",
      "C": "The CUS script stating concern, discomfort, and that this is a safety issue",
      "D": "The SOAP-ME checklist used to prepare equipment before an intubation"
    },
    "answer": "C",
    "explanation": "The CUS script gives junior staff a scaffold to escalate concerns when hierarchy might silence them, stating Concerned, Uncomfortable, and Safety issue. DOPE addresses intubation deterioration, MR SOPA addresses failed ventilation, and SOAP-ME is an intubation equipment checklist."
  },
  {
    "id": 7,
    "chapter": 1,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "An error is found in a paper procedure note that must be corrected. Which method follows proper amendment practice?",
    "options": {
      "A": "Write the correction days later from memory once the chart is reviewed",
      "B": "Obliterate the original entry completely so the mistake cannot be misread later",
      "C": "Erase the line and rewrite it cleanly to keep the chart legible and tidy",
      "D": "Strike through with a single line, then initial and date the correction made"
    },
    "answer": "D",
    "explanation": "Corrections strike through with a single line, initialed and dated, never obliterating the original. Obliteration and erasure destroy the record, and contemporaneous documentation carries far more evidentiary weight than a reconstruction written days later from memory."
  },
  {
    "id": 8,
    "chapter": 1,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "A toddler presents with a spiral femur fracture and a caregiver history that does not match the child's developmental stage. How should the clinician document the injuries?",
    "options": {
      "A": "Describe injuries objectively by size, shape, color, and location without interpreting cause",
      "B": "Summarize the caregiver history loosely to avoid appearing accusatory in the chart",
      "C": "Interpret the likely cause of each bruise directly in the procedure note",
      "D": "Defer all documentation until child protective services completes its formal report"
    },
    "answer": "A",
    "explanation": "Injuries should be described objectively by size, shape, color, and location, with the caregiver history quoted verbatim, because the record may become child-protection evidence. Interpreting cause, loosely paraphrasing history, or deferring documentation all weaken a record on which the child's safety may depend."
  },
  {
    "id": 9,
    "chapter": 1,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "Before discharge after a sedated procedure, which finding confirms the child has met appropriate discharge criteria?",
    "options": {
      "A": "The child remains drowsy but rouses briefly to vigorous painful stimulation",
      "B": "Vital signs are stable but the child has not yet tolerated any oral fluids",
      "C": "Return to baseline mental status, stable vitals, and ability to maintain hydration",
      "D": "The procedure note is complete even though the airway needs occasional repositioning"
    },
    "answer": "C",
    "explanation": "Discharge after sedation requires return to baseline mental status, stable vital signs, and the ability to maintain hydration. Persistent drowsiness, inability to tolerate fluids, and an airway still needing support all indicate the child has not yet recovered to a safe discharge threshold."
  },
  {
    "id": 10,
    "chapter": 2,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "A 4-year-old in respiratory failure requires intubation, and no measured weight is available. Using the current cuffed tube formula, which internal diameter should be prepared first?",
    "options": {
      "A": "A cuffed 4.0 tube, derived from the older uncuffed formula of age divided by four plus four",
      "B": "A cuffed 4.5 tube, derived from age divided by four plus 3.5 for a four-year-old",
      "C": "A cuffed 5.0 tube, since larger tubes reduce air leak in young children",
      "D": "A cuffed 3.5 tube, since smaller tubes are universally safer in preschoolers"
    },
    "answer": "B",
    "explanation": "The cuffed formula is (age/4) + 3.5, giving 4.5 for a four-year-old. The 4.0 result uses the older uncuffed formula, which is now reserved for when cuffed tubes are unavailable. Sizes 5.0 and 3.5 do not match the calculation, though half-sizes above and below should also be prepared."
  },
  {
    "id": 11,
    "chapter": 2,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "A team is using a Broselow-Luten tape on an unweighable supine child. Where is the zone read, and what is a key limitation?",
    "options": {
      "A": "Read at the toe; the tape overestimates weight in children with high body mass index",
      "B": "Read at the heel; the tape underestimates weight in children with high body mass index",
      "C": "Read at the crown; the tape is most accurate above roughly 26 kilograms of weight",
      "D": "Read at the knee; the tape replaces any need for a measured weight once available"
    },
    "answer": "B",
    "explanation": "The zone is read at the heel, not the toe, since pointed toes introduce error, and the tape underestimates weight in high-BMI children because it indexes on length alone. It loses accuracy above roughly 18 to 26 kilograms, and a measured weight should always supersede the tape estimate."
  },
  {
    "id": 12,
    "chapter": 2,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "A 20 kg child in cardiac arrest requires epinephrine. Using the standard PALS arrest dose, what is correct?",
    "options": {
      "A": "0.2 mg of the 0.1 mg/mL concentration, equal to 2 mL, given only once during the arrest",
      "B": "2 mg of the 1 mg/mL concentration, equal to 2 mL, repeated every three to five minutes",
      "C": "0.2 mg of the 0.1 mg/mL concentration, equal to 2 mL, repeated every three to five minutes",
      "D": "0.02 mg of the 0.1 mg/mL concentration, equal to 0.2 mL, repeated every minute throughout"
    },
    "answer": "C",
    "explanation": "Arrest epinephrine is 0.01 mg/kg of the 0.1 mg/mL concentration, so 20 kg gives 0.2 mg or 2 mL, repeated every three to five minutes, not exceeding 1 mg. The 1 mg/mL concentration is the wrong vial, a single dose is incorrect, and 0.02 mg is a tenfold underdose."
  },
  {
    "id": 13,
    "chapter": 2,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "A 15 kg child in ventricular fibrillation needs defibrillation. What is the correct first and second shock energy under current guidance?",
    "options": {
      "A": "First shock 2 J/kg then 4 J/kg, possibly rising to 10 J/kg if refractory",
      "B": "First shock 0.5 J/kg then 1 J/kg, the standard synchronized cardioversion ladder",
      "C": "First shock 1 J/kg then 2 J/kg, escalating up to 5 J/kg if refractory",
      "D": "First shock 4 J/kg then 4 J/kg, with no further escalation permitted at all"
    },
    "answer": "A",
    "explanation": "Defibrillation begins at 2 J/kg, escalates to 4 J/kg for the second shock, and may rise to 10 J/kg or the adult dose for refractory ventricular fibrillation. The 0.5 to 1 J/kg ladder describes synchronized cardioversion, and the other escalation patterns do not match guideline values."
  },
  {
    "id": 14,
    "chapter": 2,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "A 10 kg toddler in septic shock needs an isotonic crystalloid fluid bolus. Which order reflects correct weight-based dosing?",
    "options": {
      "A": "1 to 2 mL/kg, giving 10 to 20 mL, titrated slowly over the following hour",
      "B": "10 to 20 mL/kg, giving 100 to 200 mL, then reassessing rather than infusing blindly",
      "C": "40 mL/kg, giving 400 mL, pushed rapidly without interval reassessment of perfusion",
      "D": "5 mL/kg, giving 50 mL, as the maximum safe single bolus for any toddler"
    },
    "answer": "B",
    "explanation": "A fluid bolus for septic or hypovolemic shock is 10 to 20 mL/kg of isotonic crystalloid, so 10 kg gives 100 to 200 mL, given and reassessed. The other ranges are too small or too large, and blind infusion without reassessment risks harm, especially in suspected cardiac or neonatal physiology."
  },
  {
    "id": 15,
    "chapter": 2,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "An order reads epinephrine for an arresting child, but two concentrations sit on the tray. What safeguard best prevents a tenfold error?",
    "options": {
      "A": "Choose whichever vial is closest, since both concentrations contain identical drug",
      "B": "Draw up the larger volume to ensure an adequate resuscitation dose is given",
      "C": "Rely on the milligram calculation alone without checking the stock concentration",
      "D": "Name the concentration explicitly and confirm the vial label against the order"
    },
    "answer": "D",
    "explanation": "The resuscitation and intramuscular anaphylaxis concentrations differ tenfold, so the concentration must be named explicitly and the vial confirmed against the order. Choosing any vial, drawing a larger volume, or trusting only the milligram math each invite the classic order-of-magnitude epinephrine error."
  },
  {
    "id": 16,
    "chapter": 2,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "A child with a long-standing tracheostomy arrives in distress, and the team needs the correct tube size urgently. What is the best source of that information?",
    "options": {
      "A": "Recalculate the tube size from an age-based formula to override any old documentation",
      "B": "Use the length-based tape alone, since it reliably predicts tracheostomy tube sizes",
      "C": "Select the largest tube available to guarantee an adequate airway lumen quickly",
      "D": "Match the documented existing device size, often best confirmed by the knowledgeable family"
    },
    "answer": "D",
    "explanation": "A technology-dependent child's existing device size is documented and should be matched rather than recalculated, and the family who manages the child daily is often the most reliable source. Formula recalculation, defaulting to the largest tube, and the tape all risk a size mismatch for an established airway."
  },
  {
    "id": 17,
    "chapter": 2,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "To embed the weight-based system into a resuscitation, the team leader assigns roles. Which division of labor best builds in cross-checks?",
    "options": {
      "A": "One clinician performs every task sequentially to avoid confusion among team members",
      "B": "Each clinician independently calculates doses using a personal preferred method and tool",
      "C": "One measures and announces the color, one retrieves by color, one double-checks medications",
      "D": "The most senior clinician calculates all doses alone while others observe quietly nearby"
    },
    "answer": "C",
    "explanation": "Assigning one person to measure and announce, one to retrieve equipment by color, and one to prepare and double-check medications parallelizes the work and builds cross-checks. Sequential solo work is slow, idiosyncratic individual methods reintroduce variability, and a single calculator removes the independent check."
  },
  {
    "id": 18,
    "chapter": 3,
    "domain": "Airway and Respiratory Procedures",
    "question": "A 5-year-old is being monitored during sedation. Using the pediatric hypotension formula, below which systolic blood pressure is the child considered hypotensive?",
    "options": {
      "A": "Below 90 mmHg, derived from a fixed adult-style lower threshold for all children",
      "B": "Below 80 mmHg, calculated as 70 plus twice the age in years for this child",
      "C": "Below 70 mmHg, since pediatric systolic pressure does not vary with age",
      "D": "Below 100 mmHg, because young children require higher systolic targets than adults"
    },
    "answer": "B",
    "explanation": "The lower systolic threshold for children one to ten years is 70 plus twice the age in years, giving 80 mmHg at age five. Hypotension is a late and dangerous sign because children compensate by raising heart rate; tachycardia is the earlier warning."
  },
  {
    "id": 19,
    "chapter": 3,
    "domain": "Airway and Respiratory Procedures",
    "question": "During monitoring of an infant, the clinician relies on the early recognition of shock. Which finding most reliably reflects shock before the blood pressure falls?",
    "options": {
      "A": "Capillary refill over two seconds with cool extremities and weak distal pulses",
      "B": "A reassuring pulse oximetry reading excluding any significant circulatory failure",
      "C": "A normal ECG complex on the monitor confirming adequate tissue perfusion",
      "D": "Frank hypotension on the cuff, the earliest objective marker of pediatric shock"
    },
    "answer": "A",
    "explanation": "Prolonged capillary refill with cool extremities and weak distal pulses is the clinical face of shock that the cuff confirms only late. Hypotension is a late sign, a normal ECG complex says nothing about perfusion, and pulse oximetry does not assess circulation."
  },
  {
    "id": 20,
    "chapter": 3,
    "domain": "Airway and Respiratory Procedures",
    "question": "A child receiving deep sedation with supplemental oxygen shows a flattening capnogram while the pulse oximeter still reads 99 percent. What does this illustrate?",
    "options": {
      "A": "Capnography detects hypoventilation and apnea sooner than pulse oximetry, which lags",
      "B": "Pulse oximetry detects hypoventilation earlier than capnography in a sedated child",
      "C": "A flattening capnogram is artifact and should be ignored while saturation stays high",
      "D": "Saturation of 99 percent excludes any meaningful airway or ventilation problem"
    },
    "answer": "A",
    "explanation": "Capnography changes the instant ventilation falters, while saturation can remain normal for a minute or more after breathing stops, especially with supplemental oxygen. A flattening capnogram signals real hypoventilation or apnea and must prompt immediate stimulation and airway repositioning, not reassurance from the saturation."
  },
  {
    "id": 21,
    "chapter": 3,
    "domain": "Airway and Respiratory Procedures",
    "question": "An asthmatic child on capnography shows an upsloping, shark-fin shape to the capnogram plateau. What does this morphology indicate?",
    "options": {
      "A": "Esophageal tube placement requiring immediate removal of the device from the airway",
      "B": "Return of spontaneous circulation heralded by a sudden sharp rise in the value",
      "C": "Circuit disconnection causing an abrupt drop of the value toward zero baseline",
      "D": "Obstruction to expiratory flow from bronchospasm, tracking response to bronchodilators"
    },
    "answer": "D",
    "explanation": "An upsloping shark-fin plateau indicates obstruction to expiratory flow, the signature of bronchospasm, and its resolution tracks bronchodilator response. Esophageal placement and disconnection produce a flat or absent tracing, while return of circulation produces a sudden sharp rise in end-tidal CO2."
  },
  {
    "id": 22,
    "chapter": 3,
    "domain": "Airway and Respiratory Procedures",
    "question": "Immediately after intubating a small child, the team wants the most reliable confirmation of tracheal placement. Which method is the gold standard?",
    "options": {
      "A": "A sustained, normal-appearing waveform capnogram over several consecutive breaths",
      "B": "Symmetric chest rise observed during the first few positive-pressure breaths only",
      "C": "Visible mist condensation inside the endotracheal tube during exhalation alone",
      "D": "Bilateral breath sounds on auscultation, the most reliable confirmation in small chests"
    },
    "answer": "A",
    "explanation": "A sustained, normal capnogram confirms tracheal placement and is more reliable than auscultation, particularly in small chests where breath sounds transmit deceptively. Mist and chest rise are supportive but not definitive, and capnography may read low during arrest when pulmonary blood flow is minimal."
  },
  {
    "id": 23,
    "chapter": 3,
    "domain": "Airway and Respiratory Procedures",
    "question": "During CPR on a child, the end-tidal CO2 reads persistently low. How should the team interpret and act on this value?",
    "options": {
      "A": "It confirms return of spontaneous circulation and compressions should stop immediately",
      "B": "It indicates the tube is esophageal and must be exchanged before continuing the code",
      "C": "It reflects compression-generated cardiac output; address depth, rate, and provider fatigue",
      "D": "It is meaningless during arrest and should be disconnected to reduce distraction"
    },
    "answer": "C",
    "explanation": "End-tidal CO2 reflects pulmonary blood flow generated by compressions, so a low value suggests inadequate compressions and prompts attention to depth, rate, and fatigue. A sudden sharp rise, not a low value, heralds return of circulation, and the waveform also confirms continued ventilation throughout the code."
  },
  {
    "id": 24,
    "chapter": 3,
    "domain": "Airway and Respiratory Procedures",
    "question": "A 2-year-old is bradycardic during a procedure. According to pediatric monitoring principles, what is the first intervention?",
    "options": {
      "A": "Administer atropine immediately, since bradycardia in young children is usually vagal",
      "B": "Begin chest compressions at once because any bradycardia signals impending arrest",
      "C": "Oxygenate and ventilate first, since bradycardia in a young child is hypoxia until proven otherwise",
      "D": "Lower the monitor alarm threshold so the bradycardia no longer triggers an alert"
    },
    "answer": "C",
    "explanation": "Bradycardia in a young child is frequently hypoxia until proven otherwise and is treated first by oxygenation and ventilation rather than by reaching for medication. Reflexive atropine, premature compressions, and silencing the alarm all fail to address the most likely underlying cause."
  },
  {
    "id": 25,
    "chapter": 3,
    "domain": "Airway and Respiratory Procedures",
    "question": "A child is pink, alert, and breathing comfortably, yet the pulse oximeter reads 80 percent. What is the most appropriate response?",
    "options": {
      "A": "Suspect a probe or perfusion artifact and examine the patient before the monitor",
      "B": "Apply a non-rebreather and escalate to the ICU regardless of clinical appearance",
      "C": "Silence the alarm permanently and document that the saturation is unreliable today",
      "D": "Treat the 80 percent reading as true hypoxia and immediately intubate the child"
    },
    "answer": "A",
    "explanation": "A comfortable, pink, alert child with a reported saturation of 80 percent more likely has a probe or perfusion artifact than true hypoxia, so the patient is examined before trusting the monitor. The monitor informs but never overrides the bedside assessment; precipitous escalation here is not warranted."
  },
  {
    "id": 26,
    "chapter": 4,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "A 3-year-old needs venipuncture. Which developmentally tailored approach best fits a preschooler who thinks magically and fears bodily harm?",
    "options": {
      "A": "Provide a detailed scientific explanation hours in advance so anxiety can fully resolve",
      "B": "Promise the procedure will not hurt at all to keep the child calm and cooperative",
      "C": "Reason with the child at length to logically talk them out of their fear",
      "D": "Give a simple honest explanation just before, offer real choices, and use comfort positioning"
    },
    "answer": "D",
    "explanation": "Preschoolers need simple honest explanations just before the event, real choices that restore control, and comfort positioning, since they cannot be reasoned out of distress. Explaining hours ahead builds anticipatory anxiety, a false promise breaks trust, and prolonged reasoning does not work at this stage."
  },
  {
    "id": 27,
    "chapter": 4,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "A clinician wants the most effective non-pharmacologic technique to reduce distress during a brisk venipuncture in a frightened toddler. Which is best?",
    "options": {
      "A": "Guided imagery asking the toddler to picture a detailed favorite vacation scene",
      "B": "Active distraction such as bubbles that demand blowing and engage the toddler fully",
      "C": "Supine restraint with firm pinning to complete the stick as quickly as possible",
      "D": "A video screen left playing in the background regardless of whether the child watches"
    },
    "answer": "B",
    "explanation": "Active, developmentally matched distraction such as bubbles that demand blowing engages a toddler and reliably reduces distress. A passively ignored screen accomplishes nothing, supine pinning increases trauma, and guided imagery suits older children rather than a frightened toddler."
  },
  {
    "id": 28,
    "chapter": 4,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "A laceration on a child's cheek will be repaired. LET gel is being considered. Which statement about its use is correct?",
    "options": {
      "A": "LET is applied for 20 to 30 minutes and may make injected anesthetic unnecessary",
      "B": "LET is ideal for fingertip and nasal tip lacerations because of its epinephrine content",
      "C": "LET must always be followed by full lidocaine infiltration regardless of the response",
      "D": "LET requires 60 minutes under occlusion and works only on fully intact skin"
    },
    "answer": "A",
    "explanation": "LET, containing lidocaine, epinephrine, and tetracaine, is applied to an open wound for 20 to 30 minutes and often makes injected anesthetic unnecessary. Its epinephrine means it is avoided on end-arterial structures like fingers and the nose tip; it acts on wounds, not intact skin, and does not mandate infiltration."
  },
  {
    "id": 29,
    "chapter": 4,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "A 20 kg child with a forearm fracture needs rapid analgesia without a needle. Using intranasal fentanyl, what is the correct dose?",
    "options": {
      "A": "15 mcg/kg, giving 300 mcg by atomizer placed entirely in one nostril for speed",
      "B": "1.5 mg/kg, giving 30 mg by atomizer, the standard intranasal opioid loading dose",
      "C": "0.15 mcg/kg, giving 3 mcg, repeated every minute until the pain resolves fully",
      "D": "1.5 mcg/kg, giving 30 mcg by atomizer divided between both nostrils for absorption"
    },
    "answer": "D",
    "explanation": "Intranasal fentanyl is 1.5 mcg/kg, so 20 kg gives 30 mcg, delivered by atomizer in a small volume divided between both nostrils. The 15 mcg/kg and 1.5 mg/kg options are gross overdoses, and 0.15 mcg/kg is far too small to provide effective analgesia."
  },
  {
    "id": 30,
    "chapter": 4,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "A child requires procedural sedation for a painful fracture reduction. Which agent is the dissociative mainstay, and at what intravenous dose?",
    "options": {
      "A": "Midazolam at 1 to 2 mg/kg IV, providing dissociation and profound analgesia together",
      "B": "Ketamine at 1 to 2 mg/kg IV, preserving airway reflexes and respiratory drive largely",
      "C": "Propofol at 4 to 5 mg/kg IV, the dissociative agent of choice for painful procedures",
      "D": "Nitrous oxide at 1 to 2 mg/kg IV, giving deep dissociation for fracture manipulation"
    },
    "answer": "B",
    "explanation": "Ketamine is the dissociative mainstay at 1 to 2 mg/kg IV (or 4 to 5 mg/kg IM), providing sedation and analgesia while largely preserving airway reflexes and respiratory drive. Midazolam gives anxiolysis without analgesia, propofol is not dissociative, and nitrous oxide is inhaled, not dosed in mg/kg IV."
  },
  {
    "id": 31,
    "chapter": 4,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "During pre-sedation preparation, which monitoring and staffing standard reflects current pediatric sedation guidance?",
    "options": {
      "A": "A single provider can perform the procedure and monitor the child simultaneously",
      "B": "Capnography replaces the need for any dedicated monitoring provider during sedation",
      "C": "Two providers are required, with continuous capnography supplementing pulse oximetry",
      "D": "Pulse oximetry alone suffices since it detects hypoventilation before desaturation"
    },
    "answer": "C",
    "explanation": "Two providers are required, one performing the procedure and one dedicated to monitoring, and continuous capnography supplements pulse oximetry because it detects hypoventilation before desaturation. A single provider is inadequate, oximetry alone lags, and capnography augments rather than replaces the dedicated monitoring provider."
  },
  {
    "id": 32,
    "chapter": 4,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "A struggling infant requires brief immobilization for a procedure. Which description correctly distinguishes immobilization from restraint?",
    "options": {
      "A": "Immobilization is the prolonged involuntary restriction of movement to manage behavior",
      "B": "Restraint is the brief supportive holding of a limb and needs no documentation",
      "C": "Immobilization is supportive, time-limited holding of a body part to keep it still and safe",
      "D": "Restraint and immobilization are identical and both require a formal physician order"
    },
    "answer": "C",
    "explanation": "Immobilization is supportive, time-limited holding of a body part to keep it still and safe, part of atraumatic care. Restraint is the involuntary restriction of movement against the patient's will, a regulated last resort requiring an order, indication, time limit, and monitoring."
  },
  {
    "id": 33,
    "chapter": 4,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "A mummy wrap is being used to immobilize an infant for a procedure. Which principle ensures it is applied safely?",
    "options": {
      "A": "It may be applied snugly across the chest to fully limit the infant's movement",
      "B": "It requires no continuous monitoring once the needed area is exposed and secured",
      "C": "It should remain in place well after the procedure to keep the infant calm and still",
      "D": "It must never compromise the airway or chest excursion or compress the abdomen"
    },
    "answer": "D",
    "explanation": "A mummy wrap secures the arms and trunk while exposing the needed area, but must never compromise the airway or chest excursion or compress the abdomen. Weight on the chest is dangerous, the wrap is released the instant the procedure ends, and the child is monitored continuously throughout."
  },
  {
    "id": 34,
    "chapter": 4,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "How should a parent ideally be coached to participate during their child's painful procedure?",
    "options": {
      "A": "In a restraining role, firmly holding the child down so staff can work efficiently",
      "B": "Always present and assisting, even when the parent is visibly too distressed to help",
      "C": "In a comforting role such as holding a hand or blowing bubbles, not as the restrainer",
      "D": "Excluded entirely, since any parental presence increases the child's anxiety level"
    },
    "answer": "C",
    "explanation": "Parents should be coached into a comforting role such as holding a hand or blowing bubbles, because a parent who restrains becomes associated with the pain while one who comforts remains a source of safety. Distressed parents may step out without guilt, and supportive presence reduces anxiety."
  },
  {
    "id": 35,
    "chapter": 5,
    "domain": "Airway and Respiratory Procedures",
    "question": "A 2-month-old with nasal congestion suddenly desaturates that resolves with nasal suctioning. Which physiologic fact best explains this?",
    "options": {
      "A": "Infants have a proportionally large functional residual capacity buffering any obstruction",
      "B": "Infants are near-obligate nasal breathers, so a little nasal mucus causes dramatic desaturation",
      "C": "Infants have low oxygen consumption, so desaturation reflects an unrelated cardiac cause",
      "D": "Infants have a low, posterior larynx that makes nasal obstruction physiologically irrelevant"
    },
    "answer": "B",
    "explanation": "Infants are near-obligate nasal breathers for the first several months, so a few milliliters of mucus can produce dramatic desaturation that resolves with suctioning. Their functional residual capacity is small and oxygen consumption high, which is why they desaturate in seconds rather than minutes."
  },
  {
    "id": 36,
    "chapter": 5,
    "domain": "Airway and Respiratory Procedures",
    "question": "After return of spontaneous circulation in a child, what is the appropriate oxygen saturation target during stabilization?",
    "options": {
      "A": "Titrate FiO2 downward to maintain SpO2 in the 94 to 99 percent range, avoiding hyperoxia",
      "B": "Keep saturation at 85 to 90 percent in every stabilized child to limit oxygen exposure",
      "C": "Maintain 100 percent saturation routinely to maximize the oxygen reserve at all times",
      "D": "Leave FiO2 at the highest setting indefinitely since hyperoxia carries no real risk"
    },
    "answer": "A",
    "explanation": "Once circulation and oxygenation are restored, titrate FiO2 down to keep SpO2 at 94 to 99 percent, because sustained hyperoxia generates reactive oxygen species and worsens outcomes. Routine 100 percent targeting and leaving FiO2 maximal are avoided, while 85 to 90 percent is too low for a typical stabilized child."
  },
  {
    "id": 37,
    "chapter": 5,
    "domain": "Airway and Respiratory Procedures",
    "question": "A child with known single-ventricle cyanotic heart disease has a baseline saturation of 80 percent. How should oxygen be managed?",
    "options": {
      "A": "Drive the saturation to 100 percent rapidly to correct the apparent hypoxemia present",
      "B": "Apply a non-rebreather and target 94 to 99 percent as in any other stabilized child",
      "C": "Treat 80 percent as a probe artifact and withhold all supplemental oxygen entirely",
      "D": "Seek the known baseline and avoid flooding the pulmonary circulation toward 100 percent"
    },
    "answer": "D",
    "explanation": "A single-ventricle child may have a baseline saturation of 75 to 85 percent, and driving such a child to 100 percent can flood the pulmonary circulation and compromise systemic perfusion. The clinician seeks the known baseline before treating a number rather than applying standard targets."
  },
  {
    "id": 38,
    "chapter": 5,
    "domain": "Airway and Respiratory Procedures",
    "question": "A 6 kg infant in moderate respiratory distress from bronchiolitis is started on high-flow nasal cannula. Which initial flow strategy is appropriate?",
    "options": {
      "A": "A fixed 60 liters per minute regardless of the infant's small body weight",
      "B": "0.2 liters per kilogram per minute, giving roughly 1 to 2 liters per minute",
      "C": "1.5 to 2 liters per kilogram per minute, giving roughly 9 to 12 liters per minute",
      "D": "4 liters per minute total through a standard low-flow nasal cannula instead"
    },
    "answer": "C",
    "explanation": "High-flow nasal cannula is weight-based at roughly 1.5 to 2 L/kg/min for infants up to about 10 kg, so a 6 kg infant receives about 9 to 12 L/min. The 0.2 L/kg figure is far too low, a fixed 60 L/min exceeds infant interface limits, and standard low-flow cannula is a different device."
  },
  {
    "id": 39,
    "chapter": 5,
    "domain": "Airway and Respiratory Procedures",
    "question": "Which clinical scenario is an appropriate indication for an oropharyngeal airway?",
    "options": {
      "A": "A drowsy but gagging postictal child who keeps pushing the device out repeatedly",
      "B": "An unconscious child without a gag reflex who has tongue-base airway obstruction",
      "C": "An alert toddler with stridor who is maintaining their own position of comfort",
      "D": "A sedated child with a partially intact gag who tolerates a nasal device better"
    },
    "answer": "B",
    "explanation": "The oropharyngeal airway is reserved for the unconscious child without a gag reflex, holding the tongue forward. In a patient with intact reflexes it provokes gagging, vomiting, and laryngospasm; the better-tolerated nasopharyngeal airway suits patients with a partially intact gag."
  },
  {
    "id": 40,
    "chapter": 5,
    "domain": "Airway and Respiratory Procedures",
    "question": "How does pediatric oropharyngeal airway insertion differ from the adult technique, and why?",
    "options": {
      "A": "Insert it directly in anatomic orientation over a tongue blade to protect the soft palate",
      "B": "Insert it upside down and rotate it 180 degrees exactly as taught in adult practice",
      "C": "Insert it sideways and rotate it 90 degrees to slip past the larger pediatric tongue",
      "D": "Insert it blindly through the nose since the oral route injures pediatric teeth easily"
    },
    "answer": "A",
    "explanation": "Because the pediatric palate is soft and easily injured, the OPA is inserted directly in its anatomic orientation over a depressed tongue with a tongue blade, not rotated 180 degrees as in adults. The sideways and nasal techniques are not the correct pediatric oropharyngeal method."
  },
  {
    "id": 41,
    "chapter": 5,
    "domain": "Airway and Respiratory Procedures",
    "question": "A nasopharyngeal airway is being considered in a child with facial injuries. Which finding is a contraindication?",
    "options": {
      "A": "A partially intact gag reflex that would expel an oropharyngeal airway instead",
      "B": "Suspected basilar skull fracture with raccoon eyes or cerebrospinal fluid rhinorrhea",
      "C": "A postictal state in which the child remains drowsy but breathing spontaneously",
      "D": "Copious oral secretions requiring frequent suctioning during airway management"
    },
    "answer": "B",
    "explanation": "Contraindications to the NPA include suspected basilar skull fracture, midface trauma, raccoon eyes, and CSF rhinorrhea, because the device can enter the cranial vault through a fractured cribriform plate. A partially intact gag is actually a reason the NPA is tolerated when an OPA would be expelled."
  },
  {
    "id": 42,
    "chapter": 5,
    "domain": "Airway and Respiratory Procedures",
    "question": "A frightened toddler will not tolerate a mask but needs supplemental oxygen. Why may blow-by oxygen be preferable to forcing a tight mask?",
    "options": {
      "A": "A calm child on blow-by may oxygenate better than a screaming child fighting a mask",
      "B": "A tight mask always delivers a lower FiO2 than blow-by oxygen in any child",
      "C": "Blow-by reliably delivers an FiO2 near 0.95 equivalent to a non-rebreather mask",
      "D": "Forcing the mask is preferred because struggling lowers oxygen consumption rapidly"
    },
    "answer": "A",
    "explanation": "A calm child on blow-by may oxygenate better than a screaming child fighting a tight mask, because the struggle raises oxygen consumption and CO2 production faster than the device compensates. Blow-by gives only modest enrichment, not non-rebreather levels, but reduced agitation can make it the better choice."
  },
  {
    "id": 43,
    "chapter": 5,
    "domain": "Airway and Respiratory Procedures",
    "question": "To restore neutral airway alignment in a supine infant with a prominent occiput, where should padding be placed?",
    "options": {
      "A": "No padding at all, since the infant's large occiput already aligns the airway axes",
      "B": "A pad under the occiput, as is appropriate for the older child and adolescent",
      "C": "A small towel roll under the shoulders to offset the large occiput and prevent flexion",
      "D": "A thick pad under the head to maximally extend the neck into deep extension"
    },
    "answer": "C",
    "explanation": "The infant's large occiput flexes the neck when supine, so a small towel roll under the shoulders restores neutral alignment. A pad under the occiput is the maneuver for older children, while head padding or hyperextension worsens infant airway positioning."
  },
  {
    "id": 44,
    "chapter": 6,
    "domain": "Airway and Respiratory Procedures",
    "question": "Why is competent bag-valve-mask ventilation considered the decisive pediatric airway skill?",
    "options": {
      "A": "Because intubation consistently outperforms BVM for survival in pediatric arrest studies",
      "B": "Because it eliminates any need to ever learn supraglottic airway placement techniques",
      "C": "Because it fully protects the airway against aspiration of gastric contents during arrest",
      "D": "Because it buys time, brackets every intubation, and shows no survival disadvantage versus prehospital intubation"
    },
    "answer": "D",
    "explanation": "BVM buys unlimited time, brackets every intubation attempt, and large studies show no survival advantage for prehospital intubation over BVM in pediatric arrest. It does not replace supraglottic skills nor protect against aspiration, but it is the foundation of airway management."
  },
  {
    "id": 45,
    "chapter": 6,
    "domain": "Airway and Respiratory Procedures",
    "question": "A self-inflating resuscitation bag is being prepared for a child. What is required to deliver a high fraction of inspired oxygen?",
    "options": {
      "A": "Nothing extra, since a self-inflating bag delivers near 1.0 FiO2 on its own at high flow",
      "B": "Occlusion of the pop-off valve, which by itself raises the delivered oxygen fraction",
      "C": "A flow-inflating bag exclusively, as self-inflating bags cannot deliver supplemental oxygen",
      "D": "An attached oxygen reservoir, because without it the delivered FiO2 is only 0.30 to 0.60"
    },
    "answer": "D",
    "explanation": "A self-inflating bag must be connected to an oxygen reservoir to deliver high FiO2, since without the reservoir the delivered concentration is only 0.30 to 0.60 even at high flow. The pop-off valve relates to pressure limiting, not oxygen fraction, and self-inflating bags do accept supplemental oxygen."
  },
  {
    "id": 46,
    "chapter": 6,
    "domain": "Airway and Respiratory Procedures",
    "question": "When sizing a face mask for bag-valve-mask ventilation in a child, what defines the correct fit?",
    "options": {
      "A": "It covers only the mouth, leaving the nose free so the child can still breathe",
      "B": "It extends from the forehead to below the chin to ensure a generous airtight seal",
      "C": "It spans from the bridge of the nose to the cleft of the chin without overhanging the eyes",
      "D": "It is deliberately oversized to compress the eyes and improve the chin seal"
    },
    "answer": "C",
    "explanation": "The correct mask spans the bridge of the nose to the cleft of the chin, covering nose and mouth without overhanging the eyes or past the chin. A mask too large compresses the eyes and leaks at the chin; one too small leaks at the nose bridge and fails to deliver an effective breath."
  },
  {
    "id": 47,
    "chapter": 6,
    "domain": "Airway and Respiratory Procedures",
    "question": "During single-operator E-C clamp mask ventilation of an infant, the chest is not rising. What is the cardinal technical error to correct?",
    "options": {
      "A": "The lifting fingers have slipped onto soft submental tissue, pushing the tongue into the pharynx",
      "B": "The mask is being lifted up into the face rather than pressed firmly downward onto it",
      "C": "The bag is being squeezed too gently, so the immediate fix is a much harder squeeze",
      "D": "The shoulder roll has over-extended the neck, which never affects infant ventilation"
    },
    "answer": "A",
    "explanation": "The cardinal error is letting the lifting fingers slip onto the soft submental tissue, which pushes the tongue into the pharynx and obstructs the airway. Fingers stay on bone, the face is lifted into the mask, and the reflex to squeeze harder is wrong because seal, not squeeze, is usually limiting."
  },
  {
    "id": 48,
    "chapter": 6,
    "domain": "Airway and Respiratory Procedures",
    "question": "Under 2025 PALS guidance, what ventilation rate is recommended for a child with a pulse but inadequate breathing?",
    "options": {
      "A": "One breath every 6 seconds, roughly 10 breaths per minute, as in adult arrest",
      "B": "One breath every 8 to 10 seconds, roughly 6 to 8 breaths per minute total",
      "C": "One breath every second, roughly 60 breaths per minute, to maximize oxygen delivery",
      "D": "One breath every 2 to 3 seconds, roughly 20 to 30 breaths per minute"
    },
    "answer": "D",
    "explanation": "The 2025 PALS rate for a child with a pulse but inadequate breathing is one breath every 2 to 3 seconds, about 20 to 30 per minute, with the faster end favored for infants. Slower rates underventilate, and 60 per minute causes dangerous hyperventilation and raised intrathoracic pressure."
  },
  {
    "id": 49,
    "chapter": 6,
    "domain": "Airway and Respiratory Procedures",
    "question": "During prolonged bag-valve-mask ventilation, the child's abdomen becomes visibly distended. Why is this consequential, and what should be done?",
    "options": {
      "A": "It is harmless in children and ventilation should simply continue at a faster rate",
      "B": "It elevates the diaphragm and raises aspiration risk; decompress with a gastric tube",
      "C": "It improves lung compliance and should be encouraged before each delivered breath",
      "D": "It indicates a correctly sealed mask and confirms adequate tidal volume delivery"
    },
    "answer": "B",
    "explanation": "Gastric distension elevates the diaphragm, reduces tidal volume reaching the lungs, and markedly increases regurgitation and aspiration risk, so it is minimized with low pressures and decompressed early with an orogastric or nasogastric tube. It does not improve compliance nor confirm a good seal."
  },
  {
    "id": 50,
    "chapter": 6,
    "domain": "Airway and Respiratory Procedures",
    "question": "Inadequate chest rise persists during mask ventilation. Using the MR SOPA mnemonic, which step is correctly matched?",
    "options": {
      "A": "M stands for medication, prompting immediate administration of a paralytic agent",
      "B": "P stands for position, meaning placing the child fully prone before continuing",
      "C": "O stands for open the mouth and insert an oral airway to relieve obstruction",
      "D": "A stands for aspirate, meaning suction the stomach before any airway repositioning"
    },
    "answer": "C",
    "explanation": "In MR SOPA, O means Open the mouth and insert an oral airway. M is Mask reseat, R is Reposition the airway, S is Suction, P is Pressure increase, and A is Alternative airway. Most failures resolve at the first two steps before any pressure increase is needed."
  },
  {
    "id": 51,
    "chapter": 6,
    "domain": "Airway and Respiratory Procedures",
    "question": "A laryngeal mask airway is needed for a child weighing 15 kg. Which size is appropriate?",
    "options": {
      "A": "Size 1, which fits neonates under 5 kilograms of body weight",
      "B": "Size 2, which fits children in the 10 to 20 kilogram range",
      "C": "Size 3, which fits children in the 30 to 50 kilogram range",
      "D": "Size 1.5, which fits children in the 5 to 10 kilogram range"
    },
    "answer": "B",
    "explanation": "LMA sizing is weight-based: size 2 fits 10 to 20 kg, so it suits a 15 kg child. Size 1 fits under 5 kg, size 1.5 fits 5 to 10 kg, and size 3 fits 30 to 50 kg. A device one size too small leaks, and one too large will not seat properly."
  },
  {
    "id": 52,
    "chapter": 6,
    "domain": "Airway and Respiratory Procedures",
    "question": "A well-seated LMA at the correct depth ventilates poorly in a small child. What is a common pediatric-specific cause?",
    "options": {
      "A": "The device is too small, which always seals perfectly but ventilates inadequately",
      "B": "The cuff has been underinflated, so simply adding maximal extra volume will fix it",
      "C": "The floppy pediatric epiglottis has been folded down over the laryngeal inlet by the cuff",
      "D": "The child is too deeply anesthetized, causing gagging that blocks the airway inlet"
    },
    "answer": "C",
    "explanation": "The floppy pediatric epiglottis can be folded downward over the laryngeal inlet by the advancing cuff, producing correct depth but poor ventilation; a slight withdrawal and reinsertion often corrects it. Overinflation worsens the seal, and gagging reflects too light, not too deep, anesthesia."
  },
  {
    "id": 53,
    "chapter": 7,
    "domain": "Airway and Respiratory Procedures",
    "question": "A child in shock requires rapid sequence intubation. Why are preoxygenation and apneic oxygenation considered determinants of success rather than refinements?",
    "options": {
      "A": "Because children have a large reserve that tolerates several minutes of apnea easily",
      "B": "Because pediatric desaturation is slower than in adults, making oxygenation optional",
      "C": "Because paralytics in children rarely cause any apnea requiring preoxygenation at all",
      "D": "Because small functional residual capacity and high oxygen consumption shorten safe apnea time dramatically"
    },
    "answer": "D",
    "explanation": "The child's small functional residual capacity and high oxygen consumption shorten safe apnea time dramatically, often to 30 to 60 seconds, so preoxygenation and apneic oxygenation are determinants of success. This is the opposite of the slow-desaturation distractor; children desaturate faster than adults."
  },
  {
    "id": 54,
    "chapter": 7,
    "domain": "Airway and Respiratory Procedures",
    "question": "A team is preparing for RSI using the SOAP-ME checklist. Which item is correctly described?",
    "options": {
      "A": "S stands for sedation depth, meaning the patient must already be unconscious first",
      "B": "A stands for airways, including the laryngoscope, blades above and below, BVM, and rescue device",
      "C": "P stands for positioning, meaning the patient must lie completely flat without a roll",
      "D": "E stands for epinephrine, meaning a single resuscitation drug must be drawn up only"
    },
    "answer": "B",
    "explanation": "In SOAP-ME, A is Airways: the laryngoscope, blades one size above and below, a bag-valve-mask, and a supraglottic rescue device. S is Suction, O is Oxygen and apneic oxygenation, P is Pharmacology, M is Monitoring, and E is Equipment for the difficult and failed airway."
  },
  {
    "id": 55,
    "chapter": 7,
    "domain": "Airway and Respiratory Procedures",
    "question": "During RSI, the operator sets a desaturation threshold for stopping a laryngoscopy attempt. What is the commonly used SpO2 limit and rationale?",
    "options": {
      "A": "An SpO2 of 99 percent, because any drop below baseline mandates abandoning intubation entirely",
      "B": "An SpO2 of 70 percent, since stopping earlier wastes the limited chance at first-pass success",
      "C": "An SpO2 of 90 percent, at which the operator stops, reoxygenates by BVM, and regroups",
      "D": "No threshold at all, since the operator should persist until the tube passes the cords"
    },
    "answer": "C",
    "explanation": "A commonly set desaturation threshold is an SpO2 of 90 percent, at which the operator stops, reoxygenates with BVM, and regroups before a further attempt. Persisting past this consumes reserve and risks bradycardia and arrest; the threshold is agreed and announced before the first attempt."
  },
  {
    "id": 56,
    "chapter": 7,
    "domain": "Airway and Respiratory Procedures",
    "question": "A child with status asthmaticus and borderline blood pressure needs an induction agent for RSI. Which is most appropriate and why?",
    "options": {
      "A": "Propofol 1 to 2 mg/kg, because it blunts airway reflexes and supports blood pressure",
      "B": "Ketamine 1 to 2 mg/kg, because it preserves respiratory drive and provides bronchodilation",
      "C": "Midazolam as the sole agent, because it is a potent fast-onset induction drug",
      "D": "Etomidate 0.3 mg/kg, chosen specifically for its bronchodilator properties in asthma"
    },
    "answer": "B",
    "explanation": "Ketamine at 1 to 2 mg/kg preserves respiratory drive and airway reflexes, supports blood pressure, and provides bronchodilation, making it favored in shock and status asthmaticus. Propofol causes hypotension, midazolam is a weak slow induction agent, and etomidate is hemodynamically neutral but not a bronchodilator."
  },
  {
    "id": 57,
    "chapter": 7,
    "domain": "Airway and Respiratory Procedures",
    "question": "A 16-year-old with a crush injury and possible hyperkalemia needs paralysis for RSI. Which agent and dose is preferred, and why?",
    "options": {
      "A": "Succinylcholine 1.5 to 2 mg/kg, since crush injury is a clear indication for its use",
      "B": "Succinylcholine 4 mg/kg IM, the fastest route to intubating conditions in this patient",
      "C": "Rocuronium 0.1 mg/kg, a sub-paralytic dose that minimizes any cardiovascular effect",
      "D": "Rocuronium 1 to 1.2 mg/kg, avoiding the hyperkalemia risk that succinylcholine carries"
    },
    "answer": "D",
    "explanation": "Rocuronium 1 to 1.2 mg/kg is preferred here because succinylcholine is contraindicated in crush injury beyond the first day and in hyperkalemia, where it can trigger lethal hyperkalemia. Rocuronium 0.1 mg/kg is sub-therapeutic, and succinylcholine is the wrong choice given the contraindication."
  },
  {
    "id": 58,
    "chapter": 7,
    "domain": "Airway and Respiratory Procedures",
    "question": "After placing a 4.0 cuffed endotracheal tube, the operator estimates insertion depth at the lip. What is the approximate depth?",
    "options": {
      "A": "Roughly 8 centimeters, estimated as the tube internal diameter multiplied by two",
      "B": "Roughly 12 centimeters, estimated as the tube internal diameter multiplied by three",
      "C": "Roughly 16 centimeters, estimated as the tube internal diameter multiplied by four",
      "D": "Roughly 20 centimeters, a fixed depth used for all pediatric endotracheal tubes"
    },
    "answer": "B",
    "explanation": "Insertion depth at the lip approximates the tube internal diameter times three, so a 4.0 tube sits near 12 centimeters. The pediatric trachea is short, so depth is rechecked after every movement and confirmed radiographically with the tip in the mid-trachea above the carina."
  },
  {
    "id": 59,
    "chapter": 7,
    "domain": "Airway and Respiratory Procedures",
    "question": "Which laryngoscope blade is preferred for intubating a young infant, and what is the anatomic reason?",
    "options": {
      "A": "An adult-size straight blade, chosen to compensate for the infant's small oral cavity",
      "B": "A curved Macintosh blade, which seats in the vallecula to indirectly lift the epiglottis",
      "C": "A hyperangulated video blade alone, which removes any need to visualize the epiglottis",
      "D": "A straight Miller blade, which directly lifts the floppy, anteriorly angled infant epiglottis"
    },
    "answer": "D",
    "explanation": "A straight Miller blade is preferred in infants because it directly lifts the floppy, anteriorly angled epiglottis. Curved Macintosh blades seat in the vallecula and become practical only in older children, and an adult-size blade is inappropriate for an infant's small oral cavity."
  },
  {
    "id": 60,
    "chapter": 7,
    "domain": "Airway and Respiratory Procedures",
    "question": "An intubated child deteriorates suddenly. Using the DOPE mnemonic, what should be excluded first given pediatric anatomy?",
    "options": {
      "A": "Pneumothorax, since it is the single most frequent cause of pediatric tube deterioration",
      "B": "Displacement of the tube, the most common cause because the pediatric trachea is short",
      "C": "Equipment failure, which should be assumed before reconfirming the capnography waveform",
      "D": "Obstruction by secretions, which is excluded only after a chest radiograph is obtained"
    },
    "answer": "B",
    "explanation": "In DOPE, Displacement is excluded first because the pediatric trachea is short and the small child is frequently moved, making displacement the commonest cause of sudden deterioration. It is checked by reconfirming the capnography waveform and tube depth before pursuing obstruction, pneumothorax, or equipment failure."
  },
  {
    "id": 61,
    "chapter": 7,
    "domain": "Airway and Respiratory Procedures",
    "question": "Immediately after a paralyzed child is intubated with rocuronium, what is an essential post-intubation priority?",
    "options": {
      "A": "Withhold sedation until the paralytic wears off so neurologic exams remain possible",
      "B": "Reverse the rocuronium routinely with sugammadex regardless of the clinical situation",
      "C": "Set tidal volumes near 12 to 15 mL/kg to ensure generous lung expansion after intubation",
      "D": "Provide ongoing sedation and analgesia promptly, since paralysis outlasts many induction agents"
    },
    "answer": "D",
    "explanation": "Ongoing sedation and analgesia must follow promptly because the long-acting paralytic outlasts a single dose of many induction agents, and a paralyzed patient waking without sedation experiences awareness while unable to move. Routine reversal is not indicated, and lung-protective tidal volumes are 6 to 8 mL/kg."
  },
  {
    "id": 62,
    "chapter": 8,
    "domain": "Airway and Respiratory Procedures",
    "question": "On which single question does the difficult versus failed airway management algorithm pivot?",
    "options": {
      "A": "Whether a paralytic has already been administered before the first laryngoscopy",
      "B": "Whether the child can be oxygenated by any means, which dictates the entire pathway",
      "C": "Whether the child has a known syndrome predisposing to a difficult airway anatomy",
      "D": "Whether a video laryngoscope is available before any intubation attempt is begun"
    },
    "answer": "B",
    "explanation": "The algorithm pivots on whether the child can be oxygenated by any means. A difficult but oxygenating airway permits deliberate problem-solving, whereas a cannot-intubate, cannot-oxygenate situation is a crisis measured in seconds. Device availability, syndromes, and paralytic status inform but do not define this pivot."
  },
  {
    "id": 63,
    "chapter": 8,
    "domain": "Airway and Respiratory Procedures",
    "question": "A child with stridor at rest, drooling, and a tripod posture is suspected of having epiglottitis. What is the safest airway strategy?",
    "options": {
      "A": "Keep the child calm in their position of comfort and manage in a controlled setting with surgical backup",
      "B": "Proceed at once with paralytic-based RSI to secure the airway before obstruction worsens",
      "C": "Force the child supine immediately and perform direct laryngoscopy to inspect the epiglottis",
      "D": "Place a nasopharyngeal airway urgently to bypass the supraglottic swelling at the bedside"
    },
    "answer": "A",
    "explanation": "A child with a critical supraglottic process should be kept calm in their position of comfort and managed in a controlled setting, ideally the operating room with surgical backup, preserving spontaneous ventilation. An urgent paralytic-based RSI or forcing the child supine may precipitate complete obstruction."
  },
  {
    "id": 64,
    "chapter": 8,
    "domain": "Airway and Respiratory Procedures",
    "question": "During laryngoscopy only the posterior cartilages and inferior arytenoids are visible. What is the single most valuable rescue adjunct?",
    "options": {
      "A": "A bougie, advanced under the epiglottis with tracheal clicks and distal hold-up confirming entry",
      "B": "A flexible bronchoscope, which is the fastest tool for this partial direct-vision view",
      "C": "A larger endotracheal tube, forced blindly past the arytenoids without any guide",
      "D": "Immediate front-of-neck access, since a partial glottic view defines a failed airway"
    },
    "answer": "A",
    "explanation": "With only the posterior glottic structures visible, the bougie is the most valuable rescue adjunct; tracheal clicks and distal hold-up confirm airway entry, then the tube is railroaded over it. A flexible scope is for fixed anatomy, forcing a larger tube is unsafe, and a partial view is not yet a failed airway."
  },
  {
    "id": 65,
    "chapter": 8,
    "domain": "Airway and Respiratory Procedures",
    "question": "A frequent pitfall of hyperangulated video laryngoscopy is a perfect view of the cords but inability to deliver the tube. Which technique counters this?",
    "options": {
      "A": "Preload a stylet shaped to match the blade curvature and insert the tube under direct vision first",
      "B": "Switch to a non-styletted tube and advance it purely by watching the video screen",
      "C": "Increase the angle further to bring the larynx even more sharply into the central view",
      "D": "Abandon the attempt immediately and proceed directly to a supraglottic rescue device"
    },
    "answer": "A",
    "explanation": "The acute angle that brings the larynx into view also bends the tube path, so the counter is to preload a stylet matching the blade curvature, insert the tube under direct vision into the mouth before looking at the screen, and withdraw the blade slightly to flatten the angle. A non-styletted tube and a steeper angle worsen the problem."
  },
  {
    "id": 66,
    "chapter": 8,
    "domain": "Airway and Respiratory Procedures",
    "question": "After how many intubation attempts should the team generally declare the airway failed, and what governs the next move?",
    "options": {
      "A": "After ten attempts, only if no video laryngoscope was available for any of them",
      "B": "After about six attempts, continuing identical attempts until a senior operator arrives",
      "C": "After about three attempts, declaring failure and prioritizing oxygenation over intubation",
      "D": "After a single attempt, immediately performing front-of-neck access without BVM"
    },
    "answer": "C",
    "explanation": "After no more than about three attempts, and fewer if each causes desaturation, the airway is declared failed and the priority pivots to oxygenation, not tube placement. At least one variable is changed between attempts, and the team returns to two-person bag-valve-mask ventilation."
  },
  {
    "id": 67,
    "chapter": 8,
    "domain": "Airway and Respiratory Procedures",
    "question": "Rocuronium was given for RSI and intubation has failed, but the child can be oxygenated by BVM. When is reversal with sugammadex most appropriate?",
    "options": {
      "A": "Only after the team has committed to a surgical front-of-neck airway and failed",
      "B": "Immediately after any failed first attempt, regardless of current oxygenation status",
      "C": "Never, because sugammadex has no role once a neuromuscular paralytic has been given",
      "D": "When restoring spontaneous breathing is safest and the indication does not demand an immediate airway"
    },
    "answer": "D",
    "explanation": "Sugammadex reversal is reserved for when waking the child to restore spontaneous breathing is the safest path and the underlying indication does not itself demand an immediate airway. With adequate oxygenation there is no urgency to reverse, and reversal is never a substitute for managing a true cannot-oxygenate crisis."
  },
  {
    "id": 68,
    "chapter": 8,
    "domain": "Airway and Respiratory Procedures",
    "question": "What is the most dangerous human-factors error in the failed pediatric airway, and how is it countered?",
    "options": {
      "A": "Overuse of capnography, countered by relying on auscultation to confirm tube placement",
      "B": "Excessive delegation of roles, countered by having one operator perform every airway task alone",
      "C": "Calling for help too early, countered by waiting until the crisis has fully crystallized",
      "D": "Cognitive fixation on the failing technique, countered by a structured algorithm and loud declaration of failure"
    },
    "answer": "D",
    "explanation": "Cognitive fixation, the urge to keep trying the failing technique, is the most dangerous error, countered by a structured algorithm, a predesignated member empowered to call the transition, and a loud declaration that the airway has failed. Early help and capnography are beneficial, not errors."
  },
  {
    "id": 69,
    "chapter": 8,
    "domain": "Airway and Respiratory Procedures",
    "question": "Intubation and BVM have both failed in a hypoxic child, and a laryngeal mask is placed and ventilates well. What best describes the role of this supraglottic airway?",
    "options": {
      "A": "A definitive endpoint that needs no conversion once it ventilates the child adequately",
      "B": "A failure requiring immediate front-of-neck access despite the child now oxygenating",
      "C": "A device that fully protects against aspiration and may be left for prolonged transport",
      "D": "A bridge that restores oxygenation and allows controlled conversion to a definitive airway"
    },
    "answer": "D",
    "explanation": "A correctly sized supraglottic airway is the central rescue device and is usually a bridge, not an endpoint; it restores oxygenation and buys time for a controlled conversion to a definitive airway, including flexible-scope-guided exchange. It does not fully protect against aspiration, and front-of-neck access is unnecessary once the child oxygenates."
  },
  {
    "id": 70,
    "chapter": 8,
    "domain": "Airway and Respiratory Procedures",
    "question": "A 4-year-old enters a cannot-intubate, cannot-oxygenate state and a front-of-neck airway is required. Which technique is appropriate for this age?",
    "options": {
      "A": "Surgical cricothyroidotomy with a scalpel, bougie, and small cuffed tube as in adults",
      "B": "Needle cricothyroidotomy with a large-bore cannula, since the membrane and larynx are tiny",
      "C": "Blind digital intubation through the mouth, avoiding any incision in a small child",
      "D": "Repeated video laryngoscopy attempts until anesthesia arrives to assist the team"
    },
    "answer": "B",
    "explanation": "In a child under roughly 8 to 10 years the cricothyroid membrane is tiny and the larynx soft, so a needle cricothyroidotomy with a large-bore cannula is performed rather than a formal surgical cricothyroidotomy. The scalpel technique suits adolescents, and continued laryngoscopy in a cannot-oxygenate crisis is fatal delay."
  },
  {
    "id": 71,
    "chapter": 9,
    "domain": "Airway and Respiratory Procedures",
    "question": "For a 3-year-old in a cannot-intubate, cannot-oxygenate emergency, which front-of-neck technique is the procedure of choice and why?",
    "options": {
      "A": "Needle cricothyrotomy with transtracheal oxygenation, because the cricothyroid membrane is too small to cut",
      "B": "Immediate tracheostomy at the bedside, because it provides definitive ventilation rapidly",
      "C": "Seldinger percutaneous cricothyrotomy, because the adult-sized kit fits a preschooler well",
      "D": "Open surgical cricothyrotomy, because a scalpel allows the most controlled airway in young children"
    },
    "answer": "A",
    "explanation": "In a child under roughly 5 years, the cricothyroid membrane is too small for any cutting technique, so needle cricothyrotomy with transtracheal oxygenation is the procedure of choice. A scalpel readily transects the cricoid or posterior wall, and standard Seldinger kits are sized for adult anatomy."
  },
  {
    "id": 72,
    "chapter": 9,
    "domain": "Airway and Respiratory Procedures",
    "question": "What is the leading cause of death in the pediatric cannot-intubate, cannot-oxygenate scenario?",
    "options": {
      "A": "Posterior tracheal wall perforation from an overly steep needle angle",
      "B": "Bleeding from the thyroid isthmus during the neck incision",
      "C": "Subglottic stenosis developing in the weeks after the procedure",
      "D": "Indecision and hesitation rather than the surgical procedure itself"
    },
    "answer": "D",
    "explanation": "Indecision, not the procedure itself, is the leading cause of death in CICO. The trigger to cut or puncture must be pulled while a perfusing rhythm remains, since profound hypoxic bradycardia precedes arrest by seconds in small children. Bleeding, perforation, and stenosis are complications, not the leading killer."
  },
  {
    "id": 73,
    "chapter": 9,
    "domain": "Airway and Respiratory Procedures",
    "question": "During needle cricothyrotomy, the needle is directed at a 30 to 45 degree caudad angle. What is the main reason for this angle?",
    "options": {
      "A": "To maximize the depth of insertion so the catheter reaches the carina directly",
      "B": "To direct the needle cephalad toward the larynx for a more secure airway seat",
      "C": "To follow the tracheal axis toward the feet and avoid the posterior tracheal wall",
      "D": "To enter the esophagus deliberately and confirm placement by gastric aspiration"
    },
    "answer": "C",
    "explanation": "The needle is angled 30 to 45 degrees caudad, toward the feet, to follow the tracheal axis and avoid puncturing the posterior wall. A cephalad angle, esophageal entry, or excessively deep insertion would all risk injury rather than safe intratracheal catheter placement."
  },
  {
    "id": 74,
    "chapter": 9,
    "domain": "Airway and Respiratory Procedures",
    "question": "A needle cricothyrotomy is providing oxygenation in a small child. What is the essential physiologic caveat the operator must respect?",
    "options": {
      "A": "It provides full ventilation, so carbon dioxide clearance is never a limiting concern",
      "B": "It can be left in place indefinitely as a definitive airway once placement is confirmed",
      "C": "It oxygenates but not ventilates, so a patent exit path is needed to avoid breath stacking and barotrauma",
      "D": "It requires the highest available jet pressure with no expiratory pause between breaths"
    },
    "answer": "C",
    "explanation": "Needle cricothyrotomy provides oxygenation but not adequate ventilation, so carbon dioxide accumulates and exhalation must occur passively through a partially patent upper airway. Without an exit path, jet ventilation causes breath stacking, barotrauma, and tension pneumothorax; a long expiratory pause is essential."
  },
  {
    "id": 75,
    "chapter": 9,
    "domain": "Airway and Respiratory Procedures",
    "question": "For an open surgical cricothyrotomy in an adolescent, which skin incision is recommended and why?",
    "options": {
      "A": "A horizontal skin incision, because it gives the widest immediate exposure of the membrane",
      "B": "A circular incision around the cricoid, because it best stabilizes the laryngeal cartilages",
      "C": "A diagonal incision across the sternocleidomastoid, because it reaches the trachea fastest",
      "D": "A vertical midline skin incision, because it avoids the anterior jugular veins and allows extension"
    },
    "answer": "D",
    "explanation": "A vertical midline skin incision of 3 to 4 cm is recommended because it avoids the anterior jugular veins and allows extension if needed. The horizontal stab is made through the membrane itself, not the skin, and the diagonal and circular incisions are not standard technique."
  },
  {
    "id": 76,
    "chapter": 9,
    "domain": "Airway and Respiratory Procedures",
    "question": "During a scalpel-bougie-tube cricothyrotomy, which tactile finding confirms correct intraluminal bougie placement?",
    "options": {
      "A": "The bougie passes endlessly without resistance, confirming a clear path to the lungs",
      "B": "The distal angle clicks over the tracheal rings and meets a soft hold-up distally",
      "C": "Bright bleeding wells up around the bougie, confirming entry into the vascular trachea",
      "D": "The bougie immediately buckles against firm tissue, confirming the membrane was crossed"
    },
    "answer": "B",
    "explanation": "Correct intraluminal placement is confirmed by feeling the bougie's distal angle click over the tracheal rings and meeting a soft hold-up at the carina or a small bronchus. Endless passage without resistance suggests a false tissue plane, and bleeding or buckling does not confirm tracheal entry."
  },
  {
    "id": 77,
    "chapter": 9,
    "domain": "Airway and Respiratory Procedures",
    "question": "What is the single most reliable confirmation of correct placement after a percutaneous Seldinger cricothyrotomy?",
    "options": {
      "A": "Capnography, the single most reliable confirmation that must be used after placement",
      "B": "Palpation of the tube within the neck soft tissues by the operator's free hand",
      "C": "Absence of bleeding from the incision site once the airway catheter is seated",
      "D": "Visualization of the guidewire still protruding from the airway catheter hub"
    },
    "answer": "A",
    "explanation": "Capnography is the single most reliable confirmation of correct placement and must be used, supplemented by bilateral breath sounds and chest rise. Neck palpation, absence of bleeding, and a retained guidewire do not reliably confirm intratracheal positioning of the airway catheter."
  },
  {
    "id": 78,
    "chapter": 9,
    "domain": "Airway and Respiratory Procedures",
    "question": "Why is every emergency surgical airway in a child converted to a definitive airway as soon as possible?",
    "options": {
      "A": "Because the cricothyroid membrane heals only if the catheter remains indefinitely",
      "B": "Because the surgical airway provides better long-term ventilation than any tracheostomy",
      "C": "Because the temporizing airway eventually causes subglottic stenosis and poor CO2 clearance",
      "D": "Because conversion is purely a documentation requirement with no physiologic benefit"
    },
    "answer": "C",
    "explanation": "Every emergency surgical airway is a temporizing bridge converted promptly to a formal definitive airway because needle techniques clear carbon dioxide poorly and prolonged use risks subglottic stenosis. Conversion is a physiologic necessity, not merely documentation, and prevents the late narrowing of the airway."
  },
  {
    "id": 79,
    "chapter": 10,
    "domain": "Airway and Respiratory Procedures",
    "question": "A child with an established tracheostomy suddenly deteriorates with respiratory distress. What is the correct initial assumption?",
    "options": {
      "A": "A behavioral cause of agitation that will settle with reassurance and oral sedation",
      "B": "A primary lung process such as pneumonia, best evaluated with an urgent chest radiograph",
      "C": "Tube obstruction or displacement until proven otherwise, prompting the rescue sequence",
      "D": "Equipment failure only, which can be safely excluded without examining the tube itself"
    },
    "answer": "C",
    "explanation": "A tracheostomy child who was stable and suddenly deteriorates has obstruction or displacement until proven otherwise, prompting the fixed rescue sequence. Assuming a primary lung problem wastes critical time; equipment failure is checked quickly but the tube itself must always be assessed."
  },
  {
    "id": 80,
    "chapter": 10,
    "domain": "Airway and Respiratory Procedures",
    "question": "When a tracheostomy child deteriorates, which single question most fundamentally shapes the entire rescue plan?",
    "options": {
      "A": "Whether the child has a patent native upper airway permitting oxygenation from above",
      "B": "Whether the tracheostomy tube is cuffed or uncuffed at its current resting position",
      "C": "Whether the family has remembered to bring the spare tubes and obturator to hospital",
      "D": "Whether the child has required suctioning more than twice in the previous hour"
    },
    "answer": "A",
    "explanation": "The single most important question is whether the upper airway is patent, because some children cannot be oxygenated from the mouth or nose at all. If patent, two routes exist to oxygenate; if not, all effort focuses on the stoma. Cuff type, spare equipment, and suction frequency are secondary."
  },
  {
    "id": 81,
    "chapter": 10,
    "domain": "Airway and Respiratory Procedures",
    "question": "A suction catheter will not pass through an obstructed pediatric tracheostomy tube despite attempts. What is the correct next step?",
    "options": {
      "A": "Remove the tracheostomy tube, since an obstructed tube provides no airway and may be the obstruction",
      "B": "Instill a large saline bolus and apply prolonged continuous suction to force the plug through",
      "C": "Leave the tube in place and rely on bag-mask ventilation through the obstructed lumen",
      "D": "Immediately perform an emergency cricothyrotomy below the existing tracheostomy stoma"
    },
    "answer": "A",
    "explanation": "If a suction catheter will not pass, the tube is obstructed or displaced and must be removed, because it provides no airway and may itself be the obstruction. Removing it can never make ventilation worse; large saline boluses, ventilating through a blocked lumen, and immediate cricothyrotomy are not the next step."
  },
  {
    "id": 82,
    "chapter": 10,
    "domain": "Airway and Respiratory Procedures",
    "question": "A tracheostomy tube must be reinserted during an emergency. Which statement about the obturator is correct?",
    "options": {
      "A": "The obturator is used only after the tube has fully entered to confirm correct depth",
      "B": "The obturator provides a smooth blunt tip and must be removed immediately after insertion",
      "C": "The obturator is optional and a tube can be safely inserted without it in most children",
      "D": "The obturator is left in place after insertion to keep the airway lumen splinted open"
    },
    "answer": "B",
    "explanation": "The obturator provides a smooth, blunt leading tip and is essential for safe insertion, but it occludes the lumen, so it must be removed immediately after the tube is in place because the child cannot breathe through it. No tube should ever be inserted without its obturator."
  },
  {
    "id": 83,
    "chapter": 10,
    "domain": "Airway and Respiratory Procedures",
    "question": "What is the correct technique for inserting a new tracheostomy tube into a mature stoma?",
    "options": {
      "A": "Force the tube straight back horizontally until firm resistance signals correct seating",
      "B": "Insert without the obturator so the open lumen can suction secretions during placement",
      "C": "Insert in a posterior-then-caudad arc following the tube curve, redirecting if resistance is met",
      "D": "Aim the tip directly cephalad toward the larynx and advance with steady firm pressure"
    },
    "answer": "C",
    "explanation": "The tube is inserted in a posterior-then-caudad arc following its curve, mirroring the surgical path; if resistance is met, withdraw slightly and redirect rather than pushing harder. Forcing the tube straight back is the commonest cause of a false passage, and the obturator must be loaded during insertion."
  },
  {
    "id": 84,
    "chapter": 10,
    "domain": "Airway and Respiratory Procedures",
    "question": "A tracheostomy placed 4 days ago has dislodged. Why does the immature tract change the rescue approach?",
    "options": {
      "A": "Blind reinsertion risks a false passage into the mediastinum, so oxygenate from above and intubate orally if possible",
      "B": "The immature tract is more forgiving, so any tube can be confidently forced straight in",
      "C": "An immature tract has fully healed by day 4, so standard recannulation is entirely safe",
      "D": "Bleeding from a tracheo-innominate fistula is the dominant concern in a 4-day-old stoma"
    },
    "answer": "A",
    "explanation": "A tracheostomy under about 7 days old has no mature tract, so blind reinsertion risks a false passage into the mediastinum. The safest default when the upper airway is usable is to oxygenate from the face, occlude the stoma, and intubate orally while the surgical team reopens the tract, using stay sutures if present."
  },
  {
    "id": 85,
    "chapter": 10,
    "domain": "Airway and Respiratory Procedures",
    "question": "A child develops pulsatile bleeding around a tracheostomy placed three weeks earlier. What does this suggest and how is it managed emergently?",
    "options": {
      "A": "Minor granulation oozing, managed with a topical agent and routine outpatient follow-up",
      "B": "A mucus plug eroding the lumen, managed by deep suctioning and saline instillation",
      "C": "Normal stomal healing, requiring only reassurance and continued routine humidification",
      "D": "A tracheo-innominate artery fistula, managed by cuff hyperinflation or digital compression toward the sternum"
    },
    "answer": "D",
    "explanation": "Pulsatile or massive bleeding raises the rare, lethal possibility of a tracheo-innominate artery fistula, typically days to weeks after placement. Emergency management is to hyperinflate the cuff to tamponade or place a finger through the stoma and press anteriorly against the sternum while rushing to the operating room."
  },
  {
    "id": 86,
    "chapter": 10,
    "domain": "Airway and Respiratory Procedures",
    "question": "When the same-size tracheostomy tube will not pass during an emergency exchange, what is the correct graded response?",
    "options": {
      "A": "Insert a much larger tube to bridge across any stenosis in the tracheal tract",
      "B": "Try the half-size-smaller spare, then use a guide catheter or bougie to railroad it",
      "C": "Abandon the stoma entirely and perform immediate needle cricothyrotomy below it",
      "D": "Force the same-size tube harder until the resistance of the false passage yields"
    },
    "answer": "B",
    "explanation": "If the same-size tube meets resistance, try the half-size-smaller spare; if that fails, pass a suction catheter or small bougie as a guide and railroad the smaller tube over it. Forcing the tube risks a false passage, and oral or stomal endotracheal intubation provides rescue if recannulation still fails."
  },
  {
    "id": 87,
    "chapter": 11,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "An experienced operator needs a reliable rescue vein in a dehydrated infant whose other veins have collapsed. Which site is the classic landmark choice?",
    "options": {
      "A": "The saphenous vein, a fingerbreadth anterior and superior to the medial malleolus, cannulated by feel",
      "B": "A scalp vein, which is the only reliable option once peripheral extremity veins collapse",
      "C": "The external jugular, since it remains full despite profound dehydration in infants",
      "D": "A dorsal hand vein, which retains its caliber best during significant volume depletion"
    },
    "answer": "A",
    "explanation": "The saphenous vein lies a fingerbreadth anterior and superior to the medial malleolus with a constant position, allowing a blind landmark stick even when other veins have collapsed, making it the classic rescue site. Scalp and dorsal hand veins collapse with dehydration, and the external jugular is not described here as the landmark choice."
  },
  {
    "id": 88,
    "chapter": 11,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "Which vein visualization adjunct uniquely displays a vein's depth, diameter, and surrounding artery and nerve in a difficult-access child?",
    "options": {
      "A": "Near-infrared vein finders, which project both the map and the precise depth of veins",
      "B": "Transillumination, which shows vein depth best in older and larger children",
      "C": "Ultrasound guidance, the only adjunct that displays depth, diameter, and adjacent structures",
      "D": "A warm pack, which reveals deep vein anatomy by dilating and illuminating the limb"
    },
    "answer": "C",
    "explanation": "Ultrasound is the only adjunct that displays a vein's depth, diameter, and the surrounding artery and nerve, making it the most powerful tool for the difficult-access child. Transillumination works on thin infant tissue, near-infrared devices map superficial veins without depth, and warming simply dilates veins."
  },
  {
    "id": 89,
    "chapter": 11,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "At what angle should a peripheral catheter be inserted in a child, and why does it differ from adults?",
    "options": {
      "A": "A shallow 10 to 20 degree angle, because pediatric veins are superficial",
      "B": "A steep 45 to 60 degree angle, because pediatric veins lie unusually deep",
      "C": "A perpendicular 90 degree angle, to puncture the mobile vein wall quickly",
      "D": "A flat 5 degree angle identical to the standard adult insertion technique"
    },
    "answer": "A",
    "explanation": "The catheter is inserted bevel up at a shallow 10 to 20 degree angle, lower than in adults, because pediatric veins are superficial. A steep or perpendicular approach overshoots the thin superficial vein, and after flashback the angle is lowered nearly flat before threading the catheter."
  },
  {
    "id": 90,
    "chapter": 11,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "After a good flashback, the catheter will not thread into a child's vein. What is the most common reason and remedy?",
    "options": {
      "A": "Only the needle tip entered the vein; advance the whole unit 1 to 2 mm before threading",
      "B": "The tourniquet is too loose; remove it entirely and force the catheter in harder",
      "C": "The vein is too large; switch to a much bigger catheter and reinsert at a steep angle",
      "D": "The flashback was false; abandon the limb and move directly to intraosseous access"
    },
    "answer": "A",
    "explanation": "The commonest reason a catheter will not thread after a good flashback is that only the protruding needle tip entered while the catheter shoulder still sits in the wall. The remedy is a deliberate 1 to 2 mm advance of the whole unit after flashback to seat the catheter tip in the lumen before withdrawing the stylet."
  },
  {
    "id": 91,
    "chapter": 11,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "When drawing blood at the moment of cannulation in an infant, why is gentle aspiration important?",
    "options": {
      "A": "Vigorous suction is preferred because it fills tubes faster before the vein clots",
      "B": "Hemolysis from hard aspiration falsely lowers potassium, prompting a needless redraw",
      "C": "Gentle aspiration is unnecessary since infant veins tolerate high syringe pressure well",
      "D": "Vigorous suction collapses the thin vein wall and shears red cells, causing hemolysis"
    },
    "answer": "D",
    "explanation": "Pulling hard collapses the thin low-pressure vein wall against the catheter tip, stopping return and shearing red cells, which fails to fill the tube and hemolyzes the sample, falsely elevating potassium. A slow patient draw or gravity drip preserves both the sample and the vein."
  },
  {
    "id": 92,
    "chapter": 11,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "Which peripheral IV complication is most dangerous and demands urgent specific management?",
    "options": {
      "A": "Mild phlebitis appearing as a faint red cord, managed by simply slowing the infusion rate",
      "B": "A small hematoma from through-and-through puncture, managed with brief direct pressure",
      "C": "Extravasation of a vesicant such as calcium or a vasopressor, demanding urgent aspiration and antidote",
      "D": "Sample hemolysis from a too-small catheter, which forces only a routine redraw later"
    },
    "answer": "C",
    "explanation": "Extravasation of a vesicant such as calcium, concentrated dextrose, or a vasopressor demands urgent attention including aspiration of residual drug and a specific antidote, which is why such agents should not run through peripheral lines. Hematoma, phlebitis, and hemolysis are managed more conservatively."
  },
  {
    "id": 93,
    "chapter": 11,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "In a child in cardiac arrest, after roughly how long or how many peripheral attempts should the team proceed to intraosseous access?",
    "options": {
      "A": "After roughly 90 seconds or two attempts, proceed immediately to intraosseous insertion",
      "B": "After roughly 10 minutes of attempts, since peripheral access is always preferable first",
      "C": "After five failed attempts by a single operator, regardless of how much time has elapsed",
      "D": "Only once an ultrasound-trained specialist has personally exhausted every visible vein"
    },
    "answer": "A",
    "explanation": "In the critically ill or arresting child, if a peripheral line is not obtained within roughly 90 seconds or two attempts, the team proceeds immediately to intraosseous access so resuscitation drugs and fluids are not delayed. Perseverating with more attempts or waiting for a specialist costs lives."
  },
  {
    "id": 94,
    "chapter": 11,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "How is infiltration confirmed and managed after a saline flush through a pediatric peripheral catheter?",
    "options": {
      "A": "Infiltration is confirmed only by radiograph and the catheter is left until imaging returns",
      "B": "A firm blow with subcutaneous swelling confirms infiltration; remove the catheter and elevate the limb",
      "C": "Swelling with a free easy flush confirms correct placement and continued infusion is safe",
      "D": "A free flush without resistance confirms infiltration and the line should remain in place"
    },
    "answer": "B",
    "explanation": "A firm blow with subcutaneous swelling and pain on flushing indicates infiltration, so the catheter is removed and the limb elevated. A free flush without resistance, swelling, or pain confirms correct placement; infiltration does not require radiographic confirmation before removal."
  },
  {
    "id": 95,
    "chapter": 12,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "A 2-year-old in decompensated septic shock has collapsed peripheral veins, and two IV attempts have failed over 90 seconds. What is the most appropriate next step for vascular access?",
    "options": {
      "A": "Proceed directly to ultrasound-guided internal jugular central line placement",
      "B": "Continue additional peripheral IV attempts in the antecubital fossae bilaterally",
      "C": "Place an intraosseous needle in the proximal tibia and begin resuscitation immediately",
      "D": "Give all resuscitation medications down the endotracheal tube after intubation"
    },
    "answer": "C",
    "explanation": "IO access is first-line when IV access is not immediately available in arrest or decompensated shock, and it can be placed in under a minute. Continued failed IV attempts waste time, central access is slower, and the endotracheal route is the least preferred with erratic absorption."
  },
  {
    "id": 96,
    "chapter": 12,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "An infant needs intraosseous access during cardiac arrest. Which site is the preferred location for IO insertion in young children?",
    "options": {
      "A": "The proximal humerus, inserted just below the surgical neck of the bone",
      "B": "The proximal tibia, 1 to 2 cm below and medial to the tibial tuberosity",
      "C": "The medial malleolus, directly over the distal tibial growth plate cartilage",
      "D": "The iliac crest, entered perpendicular through the dense posterior cortex"
    },
    "answer": "B",
    "explanation": "The proximal tibia is preferred in infants and young children, sited 1 to 2 cm below and medial to the tuberosity on the flat anteromedial surface, away from the physis. The humerus is secondary in small children, and inserting over a growth plate risks physeal injury."
  },
  {
    "id": 97,
    "chapter": 12,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "Which finding is an absolute contraindication to placing an intraosseous needle in a particular bone?",
    "options": {
      "A": "A history of well-controlled asthma in an otherwise healthy school-age child",
      "B": "A body weight that falls outside the standard 15 mm needle weight range",
      "C": "The presence of a palpable distal pulse in the chosen target extremity",
      "D": "A fracture of that same target bone proximal to the intended insertion site"
    },
    "answer": "D",
    "explanation": "Fracture of the target bone is an absolute contraindication because infused fluid leaks out the fracture line and the limb swells. Asthma and a normal distal pulse are not contraindications, and weight only guides needle length selection rather than barring the procedure."
  },
  {
    "id": 98,
    "chapter": 12,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "After placing an IO needle in a child's tibia, you cannot aspirate marrow. What is the most reliable test to confirm correct intraosseous placement?",
    "options": {
      "A": "Successful aspiration of bright marrow blood into the attached primed syringe",
      "B": "A 5 to 10 mL saline flush that runs in without soft-tissue swelling around the site",
      "C": "Brisk gravity flow of crystalloid through the needle without a pressure bag",
      "D": "Audible bone crepitus felt through the hub as the needle is gently rotated"
    },
    "answer": "B",
    "explanation": "The flush test is the most reliable confirmation; a correctly seated line accepts flush without swelling, while an extraosseous needle causes boggy swelling. Aspiration often fails even in good IOs, marrow is high-resistance so gravity flow is poor, and crepitus is not a confirmation sign."
  },
  {
    "id": 99,
    "chapter": 12,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "An 8 kg infant in cardiac arrest has a functioning intraosseous line. What is the correct epinephrine dose given by the IO route?",
    "options": {
      "A": "0.1 mg/kg of the 1 mg/mL concentration, given as a tenfold higher arrest dose",
      "B": "0.01 mg/kg of the 0.1 mg/mL concentration, identical to the intravenous dose",
      "C": "1 mg/kg of the 0.1 mg/mL concentration, followed immediately by a saline flush",
      "D": "A fixed 1 mg dose regardless of weight because IO absorption is unreliable"
    },
    "answer": "B",
    "explanation": "IO drug dosing is identical to IV: epinephrine 0.01 mg/kg of the 0.1 mg/mL concentration, max 1 mg, every 3 to 5 minutes with a flush. The 0.1 mg/kg of 1 mg/mL is the higher endotracheal dose, and a fixed 1 mg ignores weight-based dosing in children."
  },
  {
    "id": 100,
    "chapter": 12,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "A seizing 3-year-old has no IV or IO access yet, and the team wants to give midazolam intranasally. Which technique optimizes mucosal absorption of the drug?",
    "options": {
      "A": "Squirt the full liquid dose as a single stream into one dependent nostril",
      "B": "Instill a large dilute volume so the drug coats the entire nasal passage",
      "C": "Use an atomizer and split the dose between both nostrils in small volumes",
      "D": "Have the child sniff hard while the undiluted dose runs down the pharynx"
    },
    "answer": "C",
    "explanation": "An atomizer creates a fine mist that coats the vascular turbinates, and splitting the dose with small per-nostril volumes maximizes absorption. A stream or large dilute volume runs down the throat and is swallowed, undergoing first-pass metabolism and acting slowly and unpredictably."
  },
  {
    "id": 101,
    "chapter": 12,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "An intubated child in arrest has no vascular access, and the team gives endotracheal epinephrine using the LEAN mnemonic. Which statement about this route is correct?",
    "options": {
      "A": "Sodium bicarbonate and calcium are the preferred endotracheal resuscitation drugs",
      "B": "Endotracheal epinephrine is dosed at about 0.1 mg/kg, roughly ten times the IV dose",
      "C": "The endotracheal route is preferred over intraosseous because absorption is faster",
      "D": "The IV dose of epinephrine is used unchanged when given down the endotracheal tube"
    },
    "answer": "B",
    "explanation": "Endotracheal epinephrine is given at roughly ten times the IV dose, about 0.1 mg/kg of the 1 mg/mL concentration, because absorption is erratic. Bicarbonate and calcium are excluded from the ET route, and it is the least preferred route, abandoned once IV or IO access exists."
  },
  {
    "id": 102,
    "chapter": 12,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "Twenty minutes after IO placement in a conscious child, the nurse notes the calf is becoming firm and swollen during a fluid bolus. What is the most likely complication?",
    "options": {
      "A": "Fat embolism causing the limb swelling and requiring immediate anticoagulation",
      "B": "Expected marrow engorgement that resolves once the pressure bag is removed",
      "C": "Extravasation from a dislodged or through-and-through needle, risking compartment syndrome",
      "D": "Osteomyelitis developing acutely within twenty minutes of needle insertion"
    },
    "answer": "C",
    "explanation": "Soft-tissue swelling during infusion signals extravasation from a needle that has perforated, dislodged, or sits in a previously punctured bone, and large-volume leak can cause compartment syndrome. The needle must be removed. Fat embolism is rare, and osteomyelitis correlates with prolonged dwell time, not acute swelling."
  },
  {
    "id": 103,
    "chapter": 13,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "A 3 kg neonate requires central venous access. According to weight-based catheter sizing, which French size is most appropriate?",
    "options": {
      "A": "A 4 French double-lumen catheter typically reserved for children 5 to 15 kg",
      "B": "A 5 French triple-lumen catheter generally used in children weighing 15 to 40 kg",
      "C": "A 7 French triple-lumen adult catheter intended for adolescents over 40 kg",
      "D": "A 3 French single or double-lumen catheter suited to infants under roughly 5 kg"
    },
    "answer": "D",
    "explanation": "For neonates and infants under about 5 kg, a 3 French catheter is appropriate. The 4 French fits 5 to 15 kg, the 5 French fits 15 to 40 kg, and the 7 French is for adolescents over 40 kg, all too large for a 3 kg neonate."
  },
  {
    "id": 104,
    "chapter": 13,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "During ongoing chest compressions in a pulseless child, the team needs central access. Which site is generally preferred during cardiopulmonary arrest, and why?",
    "options": {
      "A": "The subclavian vein, because it has the lowest catheter-related infection rate",
      "B": "The internal jugular vein, because ultrasound makes it the easiest to visualize",
      "C": "The femoral vein, because cannulation does not interrupt compressions or airway work",
      "D": "The saphenous cutdown, because it is now the first rescue maneuver in arrest"
    },
    "answer": "C",
    "explanation": "The femoral vein is often preferred during arrest because cannulation proceeds at the groin without interrupting chest compressions or airway management. The jugular and subclavian compete with airway work, and IO has displaced cutdown as the first rescue maneuver in arrest."
  },
  {
    "id": 105,
    "chapter": 13,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "You are cannulating the femoral vein under ultrasound. In the NAVEL arrangement at the groin, where does the femoral vein lie relative to the artery?",
    "options": {
      "A": "Just lateral to the femoral artery, beneath the femoral nerve and its branches",
      "B": "Just medial to the palpable femoral arterial pulse, within the femoral sheath",
      "C": "Directly deep to the artery, separated only by the inguinal ligament above",
      "D": "Within the empty space lateral to the lymphatics and medial to the nerve"
    },
    "answer": "B",
    "explanation": "In the NAVEL arrangement (Nerve, Artery, Vein, Empty space, Lymphatics from lateral to medial), the vein sits just medial to the palpable arterial pulse, roughly 1 to 2 cm below the inguinal ligament. The other descriptions misplace the vein relative to the artery."
  },
  {
    "id": 106,
    "chapter": 13,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "On bedside ultrasound during central access, you must distinguish the target vein from the adjacent artery. Which sonographic feature identifies the vein?",
    "options": {
      "A": "It is round, thick-walled, pulsatile, and does not collapse under probe pressure",
      "B": "It demonstrates brisk pulsatile color Doppler flow synchronized with the cardiac cycle",
      "C": "It is thin-walled, non-pulsatile, and collapses with gentle transducer compression",
      "D": "It lies consistently lateral to its companion vessel and resists any compression"
    },
    "answer": "C",
    "explanation": "The vein is identified by compressibility, a thin wall, and absence of pulsatile flow, collapsing under gentle probe pressure. The artery is round, thick-walled, pulsatile, and noncompressible, which describes the other distractor options."
  },
  {
    "id": 107,
    "chapter": 13,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "Which internal jugular vein is preferred for central catheterization, and what anatomic advantage explains the choice?",
    "options": {
      "A": "The left internal jugular, because it avoids the right-sided thoracic duct entirely",
      "B": "The left internal jugular, because the right apical pleura sits dangerously high",
      "C": "Either side equally, since both follow an identical course to the superior vena cava",
      "D": "The right internal jugular, because it gives a nearly straight path to the right atrium"
    },
    "answer": "D",
    "explanation": "The right internal jugular is preferred because it provides a nearly straight line to the right atrium and avoids the thoracic duct, which lies on the left. The duct is left-sided, not right, and the two sides do not follow identical courses."
  },
  {
    "id": 108,
    "chapter": 13,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "Which central venous route carries the lowest infection rate but the highest risk of pneumothorax in small children?",
    "options": {
      "A": "The subclavian vein, technically demanding with the pleural apex close to the needle",
      "B": "The internal jugular vein, favored for central venous pressure monitoring and infusions",
      "C": "The femoral vein, which carries the highest infection and thrombosis rates of the three",
      "D": "The saphenous vein, accessed by open cutdown anterior to the medial malleolus"
    },
    "answer": "A",
    "explanation": "The subclavian vein offers the most durable access and lowest infection rate but the greatest pneumothorax risk, as the pleural apex sits close to the needle path in small children. The femoral has the highest infection rate, and the saphenous cutdown is not a percutaneous pneumothorax risk."
  },
  {
    "id": 109,
    "chapter": 13,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "After placing an internal jugular central line, why is a post-procedure chest radiograph mandatory before high-pressure infusion?",
    "options": {
      "A": "To verify tip position at the cavoatrial junction and exclude a pneumothorax",
      "B": "To confirm the catheter tip lies deep within the right ventricular outflow tract",
      "C": "To document the femoral arterial waveform before vasopressor administration begins",
      "D": "To measure the saphenous vein diameter for a planned future cutdown procedure"
    },
    "answer": "A",
    "explanation": "A chest film verifies the tip at the cavoatrial junction and excludes pneumothorax; the tip should not sit in the right atrium where it risks dysrhythmia and perforation. The other options describe unrelated or incorrect goals for the radiograph."
  },
  {
    "id": 110,
    "chapter": 13,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "When percutaneous and intraosseous access have failed in a child needing immediate access, a saphenous venous cutdown is planned. Where is the great saphenous vein reliably found?",
    "options": {
      "A": "Posterior to the lateral malleolus, alongside the short saphenous vein and sural nerve",
      "B": "Just anterior and superior to the medial malleolus at the ankle, in a constant position",
      "C": "In the femoral triangle, medial to the artery and just below the inguinal ligament",
      "D": "Within the antecubital fossa, medial to the brachial artery and median nerve"
    },
    "answer": "B",
    "explanation": "The great saphenous vein is consistently found just anterior to the medial malleolus, where its position barely varies, which is why cutdown there is a trusted rescue. The other locations describe different veins and regions, not the saphenous cutdown landmark."
  },
  {
    "id": 111,
    "chapter": 14,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "A term newborn in the delivery room needs emergency epinephrine, and the team places an umbilical venous catheter. To what depth should this emergency UVC be advanced?",
    "options": {
      "A": "Only 4 to 5 cm, or just until blood returns freely, to stay clear of the liver",
      "B": "To the full Shukla high-line depth calculated as three times the birth weight plus nine",
      "C": "As deep as possible into the right ventricle to ensure central drug delivery",
      "D": "Exactly 10 cm in every term infant regardless of size or blood return"
    },
    "answer": "A",
    "explanation": "An emergency UVC is advanced only 4 to 5 cm, or until blood returns freely, keeping the tip in the umbilical vein or just into the IVC and avoiding the liver and portal system. The Shukla formula is for the UAC, and advancing into the right ventricle risks arrhythmia."
  },
  {
    "id": 112,
    "chapter": 14,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "On the cut surface of the umbilical cord, how is the umbilical vein distinguished from the two umbilical arteries?",
    "options": {
      "A": "The vein is a single large, thin-walled, gaping vessel, usually positioned cephalad",
      "B": "The vein is small, thick-walled, and constricted, while the arteries gape open widely",
      "C": "The vein and arteries are indistinguishable until flow is confirmed by aspiration",
      "D": "The vein is paired and caudal, while the single artery sits at the twelve o'clock position"
    },
    "answer": "A",
    "explanation": "The umbilical vein is a single, large, thin-walled, gaping vessel usually located cephalad near the twelve o'clock position. The two arteries are smaller, thicker-walled, and constricted into round pale openings grouped caudally. The other options reverse or confuse these features."
  },
  {
    "id": 113,
    "chapter": 14,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "What is the primary appropriate use of an umbilical artery catheter (UAC) in a sick preterm infant?",
    "options": {
      "A": "Continuous arterial pressure monitoring and frequent arterial blood gas sampling",
      "B": "Rapid delivery of resuscitation epinephrine during cardiac arrest in the delivery room",
      "C": "Central infusion of hypertonic dextrose and vasoactive drips during shock states",
      "D": "Exchange transfusion when hemolytic disease produces severe neonatal jaundice"
    },
    "answer": "A",
    "explanation": "The UAC provides continuous arterial blood pressure measurement and a port for frequent blood gas sampling; arteries are for sampling and pressure, not for pushing epinephrine. Resuscitation drugs, hypertonic infusions, and exchange transfusion are roles of the UVC, not the UAC."
  },
  {
    "id": 114,
    "chapter": 14,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "Using the Shukla formula, what is the approximate high-line insertion depth for an umbilical artery catheter in a 2 kg infant, before adding stump length?",
    "options": {
      "A": "About 9 cm, calculated as the birth weight in kilograms plus seven centimeters",
      "B": "About 15 cm, calculated as three times the birth weight plus nine centimeters",
      "C": "About 11 cm, calculated as one point five times the birth weight plus five point five",
      "D": "About 5 cm, the fixed emergency depth used for all umbilical catheters at birth"
    },
    "answer": "B",
    "explanation": "The Shukla high-line UAC depth is (3 times birth weight in kg) plus 9, giving about 15 cm for a 2 kg infant. The 9 cm figure (kg plus 7) is the low-line depth, the 1.5 times kg plus 5.5 formula is for the UVC, and 5 cm is the emergency UVC depth."
  },
  {
    "id": 115,
    "chapter": 14,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "On the post-placement radiograph, how does the course of a correctly placed UAC differ from that of a UVC?",
    "options": {
      "A": "The UAC travels directly cephalad, while the UVC dips caudally into the pelvis first",
      "B": "Both catheters follow an identical straight cephalad path through the liver shadow",
      "C": "The UAC courses caudally into the pelvis before turning cephalad, unlike the UVC",
      "D": "The UAC loops through the right atrium, while the UVC stops below the diaphragm"
    },
    "answer": "C",
    "explanation": "The UAC courses caudally into the pelvis before turning cephalad up the iliac and aorta, a downward dip that distinguishes it from the UVC, which travels directly cephalad through the liver. The other options reverse the courses or describe incorrect paths."
  },
  {
    "id": 116,
    "chapter": 14,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "During NRP, a newborn's heart rate remains below 60 despite 30 seconds of effective ventilation. What compression-to-ventilation pattern is delivered next?",
    "options": {
      "A": "A 15:2 ratio giving 100 compressions plus a varying number of breaths each minute",
      "B": "A 3:1 ratio giving 90 compressions and 30 breaths, totaling 120 events per minute",
      "C": "A 30:2 ratio with continuous compressions and asynchronous breaths every six seconds",
      "D": "A 5:1 ratio delivering 100 compressions and 20 breaths over each full minute"
    },
    "answer": "B",
    "explanation": "Neonatal resuscitation uses a 3:1 ratio, delivering 90 compressions and 30 breaths per minute for 120 total events. The 15:2 and 30:2 ratios belong to pediatric and adult CPR, not the NRP delivery-room algorithm."
  },
  {
    "id": 117,
    "chapter": 14,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "A newborn remains apneic with a heart rate of 70 after drying, warming, and stimulation. According to NRP, what is the single most important next intervention?",
    "options": {
      "A": "Positive-pressure ventilation, since most newborns respond to effective ventilation alone",
      "B": "Immediate placement of an umbilical venous catheter for epinephrine administration",
      "C": "Beginning chest compressions coordinated at a 3:1 ratio with assisted breaths",
      "D": "Endotracheal epinephrine at 0.05 to 0.1 mg/kg to bridge until access is secured"
    },
    "answer": "A",
    "explanation": "PPV is the single most important intervention in neonatal resuscitation, begun without delay for apnea or heart rate below 100; most newborns respond to effective ventilation alone. Compressions and epinephrine come only after effective ventilation fails to raise the heart rate above 60."
  },
  {
    "id": 118,
    "chapter": 15,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "During high-quality CPR on a 5-year-old child, what compression depth target should the rescuer achieve?",
    "options": {
      "A": "At least one-third of the AP chest diameter, about 5 cm (2 inches) in a child",
      "B": "At least one-half of the AP chest diameter, about 6 cm in every pediatric patient",
      "C": "Approximately 4 cm (1.5 inches), the same depth recommended for young infants",
      "D": "No more than 2 cm to avoid rib fractures and underlying visceral organ injury"
    },
    "answer": "A",
    "explanation": "Push hard means a depth of at least one-third the AP chest diameter, about 5 cm (2 inches) in a child. The 4 cm depth applies to infants, one-half the AP diameter is excessive, and 2 cm is far too shallow to generate forward flow."
  },
  {
    "id": 119,
    "chapter": 15,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "Two rescuers are performing CPR on a 6-month-old infant. Which compression technique is preferred, and why?",
    "options": {
      "A": "Two-thumb encircling technique, because it produces higher pressures and better depth",
      "B": "Two-finger technique, because it lets one provider move quickly to the airway",
      "C": "One-hand heel technique, identical to that used for larger school-age children",
      "D": "Two-hand interlaced technique, applying adult-style force across the small sternum"
    },
    "answer": "A",
    "explanation": "With two rescuers, the two-thumb encircling technique is preferred because the encircling hands generate higher peak pressures, more consistent depth, and better coronary perfusion. The two-finger method is reserved for the lone rescuer, and hand-based methods are for children, not infants."
  },
  {
    "id": 120,
    "chapter": 15,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "Without an advanced airway, two rescuers are resuscitating an arrested child. What compression-to-ventilation ratio should they use?",
    "options": {
      "A": "A 30:2 ratio, identical to the single-rescuer and standard adult arrest ratio",
      "B": "A 15:2 ratio, which delivers more frequent ventilation suited to a child's needs",
      "C": "Continuous compressions with one breath every 2 to 3 seconds and no pauses",
      "D": "A 3:1 ratio borrowed from the neonatal delivery-room resuscitation algorithm"
    },
    "answer": "B",
    "explanation": "Two rescuers without an advanced airway use 15:2, delivering more frequent ventilation appropriate to a child's oxygen demands while preserving compression fraction. The 30:2 is for a single rescuer, continuous compressions follow advanced airway placement, and 3:1 is neonatal."
  },
  {
    "id": 121,
    "chapter": 15,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "A 20 kg child in ventricular fibrillation requires defibrillation with a biphasic device. What is the correct energy for the first shock?",
    "options": {
      "A": "10 J/kg immediately, the maximum escalation reserved for refractory fibrillation",
      "B": "4 J/kg, delivering about 80 joules as the recommended first shock energy",
      "C": "0.5 to 1 J/kg, the synchronized energy used to start treating this rhythm",
      "D": "2 J/kg, delivering about 40 joules as the initial biphasic defibrillation dose"
    },
    "answer": "D",
    "explanation": "The first defibrillation shock is 2 J/kg (about 40 J for 20 kg), then 4 J/kg, with subsequent shocks at least 4 J/kg escalating up to 10 J/kg or the adult dose. The 0.5 to 1 J/kg dose is for synchronized cardioversion, not defibrillation of VF."
  },
  {
    "id": 122,
    "chapter": 15,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "Immediately after delivering a single defibrillation shock to a child in VF, what should the team do next?",
    "options": {
      "A": "Check the central pulse and rhythm at once to confirm successful defibrillation",
      "B": "Charge and deliver a second stacked shock without any intervening compressions",
      "C": "Resume chest compressions immediately and continue CPR for two full minutes",
      "D": "Give epinephrine 0.01 mg/kg before resuming any chest compressions or rhythm analysis"
    },
    "answer": "C",
    "explanation": "After a shock, resume compressions immediately without first checking a pulse or rhythm, then perform two minutes of CPR before the next analysis. Checking a pulse wastes the moments restored compressions can exploit, stacked shocks are not used, and the rhythm check belongs at the cycle's end."
  },
  {
    "id": 123,
    "chapter": 15,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "A 14 kg child with poorly perfusing supraventricular tachycardia and a pulse has failed vagal maneuvers and adenosine. Synchronized cardioversion is chosen. What is the correct initial energy?",
    "options": {
      "A": "2 J/kg for the first synchronized attempt, escalating to 4 J/kg if it fails",
      "B": "4 J/kg synchronized initially, matching the second defibrillation energy dose",
      "C": "An unsynchronized 2 J/kg shock, since the rhythm is an unstable tachyarrhythmia",
      "D": "0.5 to 1 J/kg for the first attempt, increasing to 2 J/kg if unsuccessful"
    },
    "answer": "D",
    "explanation": "Synchronized cardioversion begins at 0.5 to 1 J/kg and increases to 2 J/kg if the first attempt fails. The 2 and 4 J/kg figures are defibrillation doses, and the shock must be synchronized to the R wave for an organized tachyarrhythmia with a pulse."
  },
  {
    "id": 124,
    "chapter": 15,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "While attempting synchronized cardioversion of unstable VT, the patient deteriorates into ventricular fibrillation and the device will not discharge in sync mode. What is the correct action?",
    "options": {
      "A": "Increase the synchronized energy to maximum and press the discharge button repeatedly",
      "B": "Switch the device out of sync mode and defibrillate immediately at 2 J/kg",
      "C": "Re-arm the sync button and wait for the device to detect a clear R wave",
      "D": "Abandon electrical therapy and give amiodarone before any further shock attempt"
    },
    "answer": "B",
    "explanation": "In sync mode the device may refuse to fire because it cannot find an R wave in VF. Switch out of sync mode and defibrillate immediately at 2 J/kg. Waiting for an R wave or staying in sync mode dangerously delays the defibrillation VF requires."
  },
  {
    "id": 125,
    "chapter": 15,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "You must select defibrillation pads for an arrested infant weighing 8 kg. Which choice is correct?",
    "options": {
      "A": "Infant (small) pads, used for children weighing less than 10 kg during defibrillation",
      "B": "Adult (large) pads, since they deliver the most current to the small myocardium",
      "C": "Either pad size, provided the two surfaces are allowed to touch over the sternum",
      "D": "Pads are unnecessary; use handheld paddles without conductive gel for a faster shock"
    },
    "answer": "A",
    "explanation": "Infant (small) pads are used for children under 10 kg, while adult pads are used at 10 kg or more. Electrodes must never touch each other, as bridging creates a short circuit, and paddles always require conductive gel to avoid skin arcing and burns."
  },
  {
    "id": 126,
    "chapter": 16,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "A child has a heart rate of 50 with poor perfusion. After ensuring effective oxygenation and ventilation, what is the next PALS step before considering transcutaneous pacing?",
    "options": {
      "A": "Start a dopamine infusion and withhold epinephrine until pacing has been attempted",
      "B": "Apply pacing pads immediately, as electricity is the first-line bradycardia therapy",
      "C": "Give atropine 0.5 mg/kg, well above the recommended pediatric dosing range",
      "D": "Begin chest compressions, since pediatric bradycardia is usually hypoxic in origin"
    },
    "answer": "D",
    "explanation": "For a heart rate below 60 with poor perfusion despite effective oxygenation and ventilation, chest compressions come first, then drugs, and only then pacing. Pediatric bradycardia is usually hypoxic, so the clinician who reaches for the pacer first has misread the problem."
  },
  {
    "id": 127,
    "chapter": 16,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "Atropine is being given for vagally mediated bradycardia in a 4 kg infant. What is the minimum single dose, and why does it exist?",
    "options": {
      "A": "No minimum exists; the dose is always 0.02 mg/kg regardless of body weight",
      "B": "0.02 mg minimum, calculated strictly by weight with no lower dosing limit",
      "C": "0.5 mg minimum, because that is also the maximum allowable single pediatric dose",
      "D": "0.1 mg minimum, because smaller doses can paradoxically slow the heart further"
    },
    "answer": "D",
    "explanation": "Atropine is dosed at 0.02 mg/kg with a minimum single dose of 0.1 mg, because doses below this can produce a paradoxical central vagal effect that slows the heart further. The 0.5 mg figure is the maximum single dose, not the minimum."
  },
  {
    "id": 128,
    "chapter": 16,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "You are setting up transcutaneous pacing for a small infant. Which pad configuration is preferred, and why?",
    "options": {
      "A": "Anterior-lateral, because the small chest easily separates two anterior pads",
      "B": "A single large adult pad centered over the sternum with no posterior electrode",
      "C": "Both pads anterior over the precordium, touching to maximize current density",
      "D": "Anterior-posterior, sandwiching the heart since the small chest limits pad separation"
    },
    "answer": "D",
    "explanation": "The anterior-posterior configuration is preferred in small children because the small chest leaves little room to separate two anterior pads, and adjacent or touching pads arc current across the skin rather than through the heart. Anterior-lateral is acceptable only in larger children."
  },
  {
    "id": 129,
    "chapter": 16,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "During transcutaneous pacing, the monitor shows a wide complex after each pacing spike. How do you confirm true mechanical capture?",
    "options": {
      "A": "Palpate a pulse close to the pacing pads, matching the rate to the pacer setting",
      "B": "Observe a pacing spike on the monitor, which alone confirms ventricular contraction",
      "C": "Palpate a femoral pulse correlated with the oximetry or arterial pressure waveform",
      "D": "Increase the milliamperage until skeletal muscle twitching becomes clearly visible"
    },
    "answer": "C",
    "explanation": "Mechanical capture is confirmed by a femoral pulse matching the pacer rate, correlated with oximetry, arterial waveform, or ultrasound. Palpating near the pads risks mistaking skeletal muscle twitch for a pulse (false capture), and an electrical spike alone does not confirm contraction."
  },
  {
    "id": 130,
    "chapter": 16,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "A 6-year-old with blunt chest trauma has hypotension, muffled heart sounds, and pulsus paradoxus, with echocardiography showing right ventricular diastolic collapse. What is the indicated emergency procedure?",
    "options": {
      "A": "Immediate pericardiocentesis to relieve the tamponade compromising cardiac filling",
      "B": "Transcutaneous pacing to override the bradycardia caused by the effusion",
      "C": "Needle thoracostomy in the second intercostal space to decompress the chest",
      "D": "Synchronized cardioversion to convert the underlying unstable tachyarrhythmia"
    },
    "answer": "A",
    "explanation": "These findings indicate cardiac tamponade, for which pericardiocentesis is the indicated lifesaving procedure when hemodynamic compromise is present. Pacing, thoracostomy, and cardioversion address bradycardia, pneumothorax, and tachyarrhythmias respectively, not pericardial fluid strangling the heart."
  },
  {
    "id": 131,
    "chapter": 16,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "When ultrasound is unavailable and the subxiphoid landmark approach to pericardiocentesis is used, in what direction should the needle be aimed?",
    "options": {
      "A": "Toward the right hip at a steep angle, hugging the inferior costal margin closely",
      "B": "Straight posteriorly at 90 degrees to the skin, advancing rapidly to the pericardium",
      "C": "Toward the left shoulder at a shallow 30 to 45 degree angle, aspirating continuously",
      "D": "Toward the suprasternal notch, mirroring the subclavian central line trajectory"
    },
    "answer": "C",
    "explanation": "In the subxiphoid approach the needle enters just left of the xiphoid and is directed toward the left shoulder at a shallow 30 to 45 degree angle with continuous aspiration. The shallow angle protects abdominal organs; a steep or posterior angle risks the liver or stomach."
  },
  {
    "id": 132,
    "chapter": 16,
    "domain": "Vascular Access and Resuscitation Procedures",
    "question": "In 2026 practice, what is the preferred technique for performing pericardiocentesis, and what is its main advantage?",
    "options": {
      "A": "Real-time ultrasound guidance, because it reduces myocardial and coronary injury",
      "B": "Blind subxiphoid puncture, because it is fastest and needs no additional equipment",
      "C": "Fluoroscopically guided apical puncture, because it best visualizes the coronary arteries",
      "D": "ECG-guided advancement alone, watching only for ST elevation to mark the myocardium"
    },
    "answer": "A",
    "explanation": "Ultrasound guidance is preferred because it dramatically reduces myocardial and coronary injury and confirms the needle and fluid location, often choosing an apical or parasternal site over the classic subxiphoid window. Blind and ECG-only techniques are fallbacks when ultrasound is unavailable."
  },
  {
    "id": 133,
    "chapter": 17,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "A team plans procedural sedation targeting moderate sedation for a fracture reduction. According to the sedation continuum principle, what capability must they have?",
    "options": {
      "A": "No rescue capability, since moderate sedation never progresses to a deeper plane",
      "B": "The ability to rescue the child from deep sedation, one level beyond the intended target",
      "C": "Only the ability to reverse benzodiazepines with flumazenil at the bedside",
      "D": "The ability to perform emergency cricothyrotomy before any agent is administered"
    },
    "answer": "B",
    "explanation": "A child may drift deeper than intended, so the team must be prepared to manage one level beyond the target; targeting moderate sedation requires the ability to rescue from deep sedation. Sedation can always deepen, reversal alone is insufficient, and routine cricothyrotomy capability is not the standard."
  },
  {
    "id": 134,
    "chapter": 17,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "Why is capnography endorsed for all children receiving moderate or deep sedation?",
    "options": {
      "A": "It detects hypoventilation and apnea before pulse oximetry registers desaturation",
      "B": "It measures cardiac output continuously and detects falling blood pressure early",
      "C": "It replaces the need for a dedicated monitoring provider during the procedure",
      "D": "It confirms the depth of sedation more precisely than direct clinical observation"
    },
    "answer": "A",
    "explanation": "End-tidal CO2 monitoring detects hypoventilation and apnea seconds before oxygen saturation falls, especially when supplemental oxygen masks desaturation. It does not measure cardiac output or blood pressure, replace the dedicated provider, or directly quantify sedation depth."
  },
  {
    "id": 135,
    "chapter": 17,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "A child with a vascularly compromised forearm fracture ate two hours ago and needs urgent reduction. How should recent food intake influence the sedation decision?",
    "options": {
      "A": "It is a factor to weigh against urgency, not an absolute contraindication to sedation",
      "B": "It is an absolute contraindication; the procedure must be delayed six full hours",
      "C": "It mandates rapid-sequence intubation with general anesthesia before any reduction",
      "D": "It is irrelevant, since aspiration never occurs during pediatric procedural sedation"
    },
    "answer": "A",
    "explanation": "For emergency procedures, recent food intake is a factor to weigh, not an absolute contraindication; the clinician balances urgency, planned depth, and aspiration risk. Registry data show clinically important aspiration is exceedingly rare, but it is not nonexistent, and mandatory intubation is not required."
  },
  {
    "id": 136,
    "chapter": 17,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "What is the recommended intravenous dose of ketamine for dissociative procedural sedation in a child undergoing fracture reduction?",
    "options": {
      "A": "10 mg/kg IV as a single induction dose to guarantee deep general anesthesia",
      "B": "4 to 5 mg/kg IV given as a rapid bolus, the same as the intramuscular dose",
      "C": "0.1 mg/kg IV titrated slowly, identical to the standard fentanyl dosing range",
      "D": "1 to 2 mg/kg IV given over one to two minutes, with onset within about a minute"
    },
    "answer": "D",
    "explanation": "The IV ketamine dose for dissociative sedation is 1 to 2 mg/kg over one to two minutes, with onset within a minute. The 4 to 5 mg/kg dose is the intramuscular route, 0.1 mg/kg understates the dose, and 10 mg/kg far exceeds the recommended range."
  },
  {
    "id": 137,
    "chapter": 17,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "Which property makes ketamine especially valuable for pediatric procedural sedation?",
    "options": {
      "A": "It produces profound, dose-dependent respiratory depression that simplifies airway control",
      "B": "It provides deep sedation with no analgesia, requiring a paired opioid every time",
      "C": "It reliably lowers blood pressure, making it ideal for hypertensive emergencies",
      "D": "It preserves spontaneous ventilation and airway reflexes while providing analgesia and amnesia"
    },
    "answer": "D",
    "explanation": "Ketamine produces a dissociative state preserving spontaneous respiration, airway reflexes, and hemodynamic stability while delivering profound analgesia and amnesia. It does not cause dose-dependent respiratory depression (that is propofol), tends to support blood pressure, and provides analgesia itself."
  },
  {
    "id": 138,
    "chapter": 17,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "During ketamine sedation a child develops laryngospasm with desaturation that does not resolve with jaw thrust and positive pressure. What is the appropriate escalation?",
    "options": {
      "A": "Administer a small dose of succinylcholine, about 0.1 to 0.2 mg/kg, to break the spasm",
      "B": "Give flumazenil 0.01 mg/kg to reverse the ketamine causing the laryngospasm",
      "C": "Administer naloxone 0.1 mg/kg, since opioids are the usual cause of this event",
      "D": "Deepen sedation with additional ketamine to relax the spasming laryngeal muscles"
    },
    "answer": "A",
    "explanation": "Refractory laryngospasm is treated with a small dose of succinylcholine (0.1 to 0.2 mg/kg) after jaw thrust and positive pressure fail. Flumazenil and naloxone reverse benzodiazepines and opioids, not ketamine, and adding ketamine will not relieve the spasm."
  },
  {
    "id": 139,
    "chapter": 17,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "Why does the combination of fentanyl and midazolam require especially careful titration during pediatric sedation?",
    "options": {
      "A": "Neither agent has a reversal drug, so overdose cannot be treated if it occurs",
      "B": "Both agents reliably raise blood pressure, masking hypovolemia during the procedure",
      "C": "Their respiratory depression is synergistic and additive, increasing the risk of apnea",
      "D": "Together they produce a dissociative state with fully preserved airway reflexes"
    },
    "answer": "C",
    "explanation": "The respiratory depression of fentanyl and midazolam is synergistic and additive, so each must be titrated separately with close watch for apnea. Both can be reversed (naloxone and flumazenil), they tend to depress rather than raise blood pressure, and they do not produce dissociation."
  },
  {
    "id": 140,
    "chapter": 17,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "The two-provider model required for pediatric procedural sedation specifies which arrangement?",
    "options": {
      "A": "One provider performs the procedure while also pushing the sedative drugs as needed",
      "B": "Two proceduralists share the task while a single nurse charts the medications given",
      "C": "A dedicated clinician monitors the child and airway while a second performs the procedure",
      "D": "Any two clinicians may alternate freely between sedating and performing the procedure"
    },
    "answer": "C",
    "explanation": "The two-provider model assigns one clinician solely to administering sedation and monitoring the child and airway, while a second performs the procedure. The monitoring provider does not participate in the procedure, which the other options violate."
  },
  {
    "id": 141,
    "chapter": 17,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "In the SOAPME presedation checklist, what does the letter P signify, and why is it emphasized?",
    "options": {
      "A": "Positioning: placing a shoulder roll under every infant before any drug is administered",
      "B": "Pharmacy: the sedatives plus reversal agents naloxone and flumazenil immediately available",
      "C": "Pulse oximetry: the single monitor that detects hypoventilation before apnea occurs",
      "D": "Personnel: confirming that three providers are present before sedation can begin"
    },
    "answer": "B",
    "explanation": "In SOAPME, P stands for Pharmacy: the sedative agents and, critically, reversal agents naloxone and flumazenil drawn or immediately available, plus resuscitation drugs. Positioning, oximetry, and personnel are separate considerations not represented by the P."
  },
  {
    "id": 142,
    "chapter": 18,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "What is the maximum dose of plain lidocaine, and how does it change when combined with epinephrine?",
    "options": {
      "A": "4.5 mg/kg plain, rising to 7 mg/kg when combined with epinephrine for vasoconstriction",
      "B": "7 mg/kg plain, falling to 4.5 mg/kg when epinephrine is added to the solution",
      "C": "2.5 mg/kg plain, rising to 3 mg/kg with epinephrine, matching bupivacaine limits",
      "D": "10 mg/kg plain regardless of epinephrine, since lidocaine has a wide safety margin"
    },
    "answer": "A",
    "explanation": "Plain lidocaine maxes at 4.5 mg/kg, rising to 7 mg/kg with epinephrine because vasoconstriction slows systemic absorption. The 2.5 and 3 mg/kg figures are bupivacaine ceilings, and 10 mg/kg exceeds the safe lidocaine limit."
  },
  {
    "id": 143,
    "chapter": 18,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "What is the maximum recommended dose of plain bupivacaine in a child?",
    "options": {
      "A": "0.5 mg/kg, reflecting its prolonged four-to-eight-hour duration of action",
      "B": "7 mg/kg, the same ceiling as lidocaine combined with epinephrine solution",
      "C": "4.5 mg/kg, identical to the plain lidocaine maximum dose in pediatrics",
      "D": "2.5 mg/kg, recognizing its greater cardiotoxicity in overdose than lidocaine"
    },
    "answer": "D",
    "explanation": "The maximum dose of bupivacaine is 2.5 mg/kg (up to 3 mg/kg with epinephrine), and its overdose cardiotoxicity exceeds lidocaine. The 7 and 4.5 mg/kg figures are lidocaine ceilings, and 0.5 mg/kg understates the bupivacaine limit."
  },
  {
    "id": 144,
    "chapter": 18,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "During wound infiltration a child develops perioral numbness, tinnitus, and then a seizure. After airway and seizure management, what is the specific antidote for this toxicity?",
    "options": {
      "A": "Intramuscular epinephrine 0.01 mg/kg to counteract the cardiovascular collapse",
      "B": "Intravenous flumazenil 0.01 mg/kg to reverse the central nervous system effects",
      "C": "Intravenous lipid emulsion 20 percent, bolused about 1.5 mL/kg over one minute",
      "D": "Oral activated charcoal to bind any remaining anesthetic in the circulation"
    },
    "answer": "C",
    "explanation": "These are signs of local anesthetic systemic toxicity (LAST), treated with intravenous lipid emulsion 20 percent, about 1.5 mL/kg bolus over one minute then infusion, which sequesters lipophilic anesthetic away from cardiac tissue. Flumazenil, IM epinephrine, and charcoal do not treat LAST."
  },
  {
    "id": 145,
    "chapter": 18,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "A child needs topical anesthesia of intact skin before IV cannulation. Why is caution warranted with EMLA in a young infant?",
    "options": {
      "A": "It requires only five minutes, leaving no time to detect an allergic reaction",
      "B": "Its tetracaine component causes severe vasoconstriction of the digital arteries",
      "C": "It works only on open wounds and is completely ineffective on intact skin",
      "D": "Its prilocaine component carries a small risk of methemoglobinemia under three months"
    },
    "answer": "D",
    "explanation": "EMLA (lidocaine-prilocaine) carries a small risk of methemoglobinemia from the prilocaine component in young infants, so it is used cautiously under three months. EMLA contains no tetracaine, works on intact skin, and needs roughly 60 minutes for full effect."
  },
  {
    "id": 146,
    "chapter": 18,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "LET gel is the standard topical for open lacerations. On which structures should it be avoided, and why?",
    "options": {
      "A": "On all facial wounds, since it provides no anesthesia for facial laceration repair",
      "B": "On the scalp and forehead, where its tetracaine causes excessive bleeding and oozing",
      "C": "On end-arterial structures such as digits, nose tip, ear, and penis due to vasoconstriction",
      "D": "On intact skin only, because it works exclusively when injected beneath the dermis"
    },
    "answer": "C",
    "explanation": "LET (lidocaine, epinephrine, tetracaine) must be avoided on end-arterial structures such as the digits, nose tip, ear, and penis because of its vasoconstrictors. It works well on facial and scalp wounds and is applied topically into open wounds, not injected."
  },
  {
    "id": 147,
    "chapter": 18,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "Which maneuver reduces the burning pain a child feels during lidocaine infiltration of a wound?",
    "options": {
      "A": "Chill the anesthetic on ice and inject through intact skin away from the wound",
      "B": "Use a large 18 gauge needle and inject rapidly to shorten the duration of pain",
      "C": "Buffer the lidocaine with sodium bicarbonate and inject slowly through the wound edge",
      "D": "Add extra epinephrine to the solution to numb the skin faster before injecting"
    },
    "answer": "C",
    "explanation": "Buffering lidocaine with sodium bicarbonate raises the pH toward physiologic and markedly reduces the burn, and injecting slowly through the wound edge with a fine needle is gold-standard atraumatic infiltration. A large needle, cold solution, intact-skin entry, and rapid injection all increase pain."
  },
  {
    "id": 148,
    "chapter": 18,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "When performing a digital nerve block on a child's finger, which anesthetic should be used and why?",
    "options": {
      "A": "A large circumferential volume of any agent to ensure complete digital anesthesia",
      "B": "Lidocaine with epinephrine, to prolong the block and reduce bleeding at the site",
      "C": "Bupivacaine with epinephrine, for the longest possible duration in a small child",
      "D": "Plain lidocaine without epinephrine, because the digit has an end-arterial blood supply"
    },
    "answer": "D",
    "explanation": "Digital blocks use plain lidocaine without epinephrine because the digit has an end-arterial supply, and epinephrine is avoided in a small child's digit despite relaxed adult guidance. Excessive circumferential volume can cause a tourniquet effect compromising perfusion."
  },
  {
    "id": 149,
    "chapter": 18,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "A child has a through-and-through lip laceration crossing the vermilion border. Which regional technique best preserves the wound margins for precise alignment?",
    "options": {
      "A": "An infraorbital or mental nerve block, anesthetizing the territory without distorting tissue",
      "B": "Direct infiltration along both wound margins to balloon and lift the tissue edges",
      "C": "A digital block of the affected lip using the standard two-point ring technique",
      "D": "A posterior tibial nerve block to cover the lower face through referred pathways"
    },
    "answer": "A",
    "explanation": "Infraorbital and mental nerve blocks anesthetize the upper or lower lip and chin without distorting wound margins, allowing perfect vermilion-border alignment. Direct infiltration balloons and distorts the tissue, while digital and tibial blocks are for limbs, not the face."
  },
  {
    "id": 150,
    "chapter": 18,
    "domain": "Procedural Sedation, Analgesia, and Atraumatic Care",
    "question": "Inhaled nitrous oxide is being considered as an anxiolytic adjunct. Which condition is a contraindication because of gas expansion in closed spaces?",
    "options": {
      "A": "Mild generalized anxiety in a cooperative older child facing a minor procedure",
      "B": "A simple uncomplicated forearm fracture without any associated soft-tissue injury",
      "C": "A pneumothorax, in which trapped nitrous oxide can expand and enlarge the air collection",
      "D": "A clean facial laceration already anesthetized with topical LET gel beforehand"
    },
    "answer": "C",
    "explanation": "Nitrous oxide contraindications stem from gas expansion in closed spaces: pneumothorax, bowel obstruction, middle-ear or sinus disease, and recent intraocular gas. A simple fracture, mild anxiety, and an anesthetized laceration are appropriate settings, not contraindications."
  },
  {
    "id": 151,
    "chapter": 19,
    "domain": "Wound and Soft-Tissue Management",
    "question": "Before anesthetizing an extremity laceration, what assessment is essential and must be repeated afterward?",
    "options": {
      "A": "Obtaining a plain radiograph of every laceration to exclude an occult fracture",
      "B": "Measuring the precise wound length with a sterile ruler under magnified lighting",
      "C": "Testing distal tendon function, two-point discrimination, and capillary refill distal to the wound",
      "D": "Estimating the total body surface area involved using the patient's own palm"
    },
    "answer": "C",
    "explanation": "Tendon, nerve, and vascular function distal to the injury must be assessed before anesthetizing and again afterward, including two-point discrimination, capillary refill, and motor function. Wound measurement and TBSA estimation are not the essential neurovascular check, and routine radiographs are not required for all lacerations."
  },
  {
    "id": 152,
    "chapter": 19,
    "domain": "Wound and Soft-Tissue Management",
    "question": "Which factor is the strongest determinant of infection risk in a simple pediatric laceration?",
    "options": {
      "A": "Copious low-to-moderate-pressure irrigation, roughly 50 to 100 mL per centimeter of wound",
      "B": "Prophylactic oral antibiotics started immediately for every clean laceration repaired",
      "C": "Shaving all hair widely around the wound, including the eyebrow, before closure",
      "D": "Scrubbing the open wound bed directly with full-strength povidone-iodine solution"
    },
    "answer": "A",
    "explanation": "Copious irrigation, about 50 to 100 mL per centimeter with saline or clean tap water, is the strongest determinant of infection risk. Routine antibiotics are not indicated for simple clean wounds, the eyebrow is never shaved, and antiseptics impair healing inside the wound."
  },
  {
    "id": 153,
    "chapter": 19,
    "domain": "Wound and Soft-Tissue Management",
    "question": "A child presents 18 hours after sustaining a clean linear scalp laceration. What is the most appropriate closure decision?",
    "options": {
      "A": "Delayed primary closure with packing for five days is mandatory at this time interval",
      "B": "The wound is beyond the six-hour golden period and must heal by secondary intention",
      "C": "Primary closure is reasonable, since well-vascularized scalp wounds tolerate later closure",
      "D": "The wound must be left completely open because all scalp wounds are high-risk for infection"
    },
    "answer": "C",
    "explanation": "The golden period is a guide, not a rule; well-vascularized facial and scalp wounds may be closed primarily up to 24 hours with good cleansing. Secondary intention, mandatory delayed closure, and leaving it open are inappropriate for a clean scalp laceration at 18 hours."
  },
  {
    "id": 154,
    "chapter": 19,
    "domain": "Wound and Soft-Tissue Management",
    "question": "Which suture material and caliber are most appropriate for repairing a simple facial laceration in a child?",
    "options": {
      "A": "2-0 braided absorbable suture, chosen for maximal tensile strength on the face",
      "B": "3-0 nonabsorbable nylon, the same heavy caliber used over high-tension joints",
      "C": "6-0 nonabsorbable monofilament such as nylon, removed at 3 to 5 days",
      "D": "4-0 polypropylene left in place for 14 days to ensure the wound fully heals"
    },
    "answer": "C",
    "explanation": "On the face, 6-0 nonabsorbable monofilament such as nylon is used and removed at 3 to 5 days, since smaller-gauge material leaves less scar. Heavier 3-0 and 2-0 sutures are for high-tension areas, and leaving facial sutures 14 days causes railroad-track scarring."
  },
  {
    "id": 155,
    "chapter": 19,
    "domain": "Wound and Soft-Tissue Management",
    "question": "When closing an irregular stellate laceration that crosses the vermilion border of the lip, what is the correct first step?",
    "options": {
      "A": "Place a single anchoring suture aligning the key landmark, then subdivide remaining gaps",
      "B": "Begin at one end and run a continuous suture straight across to the opposite end",
      "C": "Close the deepest layer with a large nonabsorbable suture left exposed at the surface",
      "D": "Apply tissue adhesive across the apposed vermilion border to avoid any needle use"
    },
    "answer": "A",
    "explanation": "Begin by aligning the key landmark, such as the vermilion border, with a single anchoring suture, then divide and subdivide the remaining gaps to prevent a stepped scar. Running blindly, leaving deep sutures exposed, or using adhesive on a high-motion lip border are all incorrect."
  },
  {
    "id": 156,
    "chapter": 19,
    "domain": "Wound and Soft-Tissue Management",
    "question": "Skin staples are an excellent rapid closure for the wriggling child. For which wound are they best suited?",
    "options": {
      "A": "A delicate laceration of the eyelid margin requiring precise edge approximation",
      "B": "A linear laceration of the hair-bearing scalp, with outcomes equivalent to sutures",
      "C": "A gaping facial laceration over thin cheek skin in a cosmetically sensitive area",
      "D": "A scalp wound when head CT or MRI imaging is anticipated for the patient"
    },
    "answer": "B",
    "explanation": "Staples close linear hair-bearing scalp lacerations rapidly with infection and cosmetic outcomes equivalent to sutures. They are avoided on the face and thin skin, on delicate margins, and when head CT or MRI is anticipated because they create imaging artifact."
  },
  {
    "id": 157,
    "chapter": 19,
    "domain": "Wound and Soft-Tissue Management",
    "question": "Tissue adhesive is chosen for a clean linear forehead laceration. How should the cyanoacrylate be applied?",
    "options": {
      "A": "Over a still-bleeding wound, since the adhesive seals and stops the active oozing",
      "B": "Deep into the wound bed first, then over the surface, to bond the tissue from within",
      "C": "In several thin layers over the apposed surface, never into the wound, holding edges briefly",
      "D": "Across a wound over a high-motion joint, where it provides the most durable closure"
    },
    "answer": "C",
    "explanation": "Adhesive is applied in several thin layers over the apposed, dry surface, never into the wound, holding edges for 30 to 60 seconds to polymerize. Applying it into the wound acts as a foreign body, adhesive fails on a wet surface, and it is avoided over high-motion joints."
  },
  {
    "id": 158,
    "chapter": 19,
    "domain": "Wound and Soft-Tissue Management",
    "question": "A toddler has a small linear scalp laceration with adequate hair length and minimal gaping. Which closure spares the child any needle, staple, or removal visit?",
    "options": {
      "A": "Wound-closure tapes alone, which adhere firmly and reliably to the hairy scalp",
      "B": "A running locked nylon suture placed quickly under procedural sedation for cooperation",
      "C": "Deep buried absorbable dermal sutures followed by surface staples across the wound",
      "D": "The hair apposition technique, twisting strands from each edge and securing with adhesive"
    },
    "answer": "D",
    "explanation": "The hair apposition technique twists strands from each wound edge and secures them with a drop of tissue adhesive, closing the wound with nothing to remove and no needle or staple. Sutures and staples involve instruments, and tapes adhere poorly to hairy areas."
  },
  {
    "id": 159,
    "chapter": 19,
    "domain": "Wound and Soft-Tissue Management",
    "question": "When are systemic antibiotics appropriately indicated after pediatric laceration repair?",
    "options": {
      "A": "For all clean facial wounds closed with tissue adhesive in young children",
      "B": "For every sutured laceration, to routinely prevent any wound infection from developing",
      "C": "For bites, grossly contaminated wounds, open fractures, and immunocompromised children",
      "D": "Only for superficial wounds closed with adhesive tapes, never for sutured wounds"
    },
    "answer": "C",
    "explanation": "Antibiotics are reserved for bites, grossly contaminated wounds, open fractures, wounds with exposed cartilage or bone, and immunocompromised children. They are not indicated for simple clean lacerations regardless of closure method."
  },
  {
    "id": 160,
    "chapter": 19,
    "domain": "Wound and Soft-Tissue Management",
    "question": "A child with an incomplete primary tetanus series sustains a deep, soil-contaminated puncture wound. What tetanus prophylaxis is indicated?",
    "options": {
      "A": "Immunoglobulin alone, withholding the vaccine until the series is later completed",
      "B": "No prophylaxis, since puncture wounds rarely transmit tetanus to children",
      "C": "A booster only, with no immunoglobulin regardless of the immunization history",
      "D": "Tetanus booster plus tetanus immunoglobulin, given the incomplete primary series"
    },
    "answer": "D",
    "explanation": "A tetanus-prone wound in a child with an incomplete primary series requires both a tetanus booster and tetanus immunoglobulin. A booster alone suffices only with an adequate prior series, and a soil-contaminated puncture is high risk, so withholding prophylaxis is wrong."
  },
  {
    "id": 161,
    "chapter": 19,
    "domain": "Wound and Soft-Tissue Management",
    "question": "A child sustains a laceration over the knuckle while punching another person's mouth (a fight bite). What is the correct management?",
    "options": {
      "A": "Apply wound-closure tapes and arrange routine suture removal in ten days",
      "B": "Close primarily with tissue adhesive for the best cosmetic result over the joint",
      "C": "Suture immediately and discharge without antibiotics since the wound looks clean",
      "D": "Irrigate, leave open, splint, and give antibiotics, with hand-surgery involvement if needed"
    },
    "answer": "D",
    "explanation": "Human bites over the knuckle are notoriously infection-prone and are irrigated, left open, splinted, and treated with antibiotics, with hand surgery when the joint or tendon is involved. Primary closure of a fight bite traps a heavy oral inoculum and invites deep infection."
  },
  {
    "id": 162,
    "chapter": 20,
    "domain": "Wound and Soft-Tissue Management",
    "question": "A child has a tender, warm, erythematous swelling. Which clinical sign indicates a drainable abscess rather than cellulitis alone?",
    "options": {
      "A": "Surrounding erythema that blanches with pressure and spreads at the margins",
      "B": "Diffuse firm induration without any palpable fluid wave beneath the skin",
      "C": "A cobblestoned appearance of the subcutaneous fat seen on bedside ultrasound",
      "D": "Fluctuance, the palpable wave of trapped fluid within the soft-tissue swelling"
    },
    "answer": "D",
    "explanation": "Fluctuance, the palpable wave of trapped fluid, is the cardinal sign that a drainable collection exists. Diffuse induration without fluid and a cobblestoned ultrasound appearance indicate cellulitis, which is treated with antibiotics rather than incision."
  },
  {
    "id": 163,
    "chapter": 20,
    "domain": "Wound and Soft-Tissue Management",
    "question": "Point-of-care ultrasound is performed on a suspected abscess. Which finding confirms a drainable collection?",
    "options": {
      "A": "A pulsatile structure with brisk color Doppler flow filling the entire lesion",
      "B": "Diffuse cobblestoning of the subcutaneous tissue without a discrete fluid pocket",
      "C": "An anechoic or heterogeneous fluid pocket with posterior acoustic enhancement",
      "D": "Uniformly echogenic solid tissue with no posterior enhancement or fluid swirl"
    },
    "answer": "C",
    "explanation": "An anechoic or heterogeneous fluid pocket with posterior acoustic enhancement confirms a drainable abscess. Cobblestoning indicates cellulitis only, a pulsatile Doppler-filled structure suggests a vascular mass that must never be incised, and solid echogenic tissue holds no pus."
  },
  {
    "id": 164,
    "chapter": 20,
    "domain": "Wound and Soft-Tissue Management",
    "question": "Why is anesthetizing an abscess for incision and drainage particularly difficult?",
    "options": {
      "A": "The infected tissue is acidic, which inactivates local anesthetic, and the cavity is tense",
      "B": "Abscess cavities are richly innervated, so they require triple the usual anesthetic dose",
      "C": "Local anesthetics are absolutely contraindicated near any purulent skin collection",
      "D": "The overlying skin is insensate, so injected anesthetic produces no analgesia at all"
    },
    "answer": "A",
    "explanation": "Infected tissue is acidic, which shifts anesthetic to its ionized form that penetrates poorly, and injecting into the tense cavity is intensely painful. The best strategy is a peripheral field block in healthy tissue plus sedation, not higher doses into the cavity."
  },
  {
    "id": 165,
    "chapter": 20,
    "domain": "Wound and Soft-Tissue Management",
    "question": "In the classic incision and drainage technique, what is the most common technical error leading to recurrence?",
    "options": {
      "A": "Making an undersized stab incision and failing to break up internal loculations",
      "B": "Irrigating the cavity too aggressively with large volumes of normal saline",
      "C": "Sending a wound culture before the purulent material has been fully expressed",
      "D": "Packing the cavity too loosely so the incision drains freely onto the dressing"
    },
    "answer": "A",
    "explanation": "An undersized stab incision and incompletely disrupted loculations are leading causes of treatment failure and recurrence. The incision should extend the full length of the abscess, and loculations must be thoroughly broken with a hemostat. Irrigation, culture, and loose packing are correct steps."
  },
  {
    "id": 166,
    "chapter": 20,
    "domain": "Wound and Soft-Tissue Management",
    "question": "Loop drainage has become preferred for many uncomplicated pediatric abscesses. What is its principal advantage over classic incision and packing?",
    "options": {
      "A": "It guarantees that antibiotics are unnecessary for every drained abscess afterward",
      "B": "It eliminates the need to break up loculations within the abscess cavity entirely",
      "C": "It allows the abscess to be drained without any incision or local anesthesia",
      "D": "It spares the repeated painful packing changes while giving equal or better cure rates"
    },
    "answer": "D",
    "explanation": "Loop drainage spares the repeated painful packing changes that distress children, with equal or superior cure rates and smaller scars. Loculations still must be disrupted before threading the loop, it requires two small incisions, and it does not change antibiotic indications."
  },
  {
    "id": 167,
    "chapter": 20,
    "domain": "Wound and Soft-Tissue Management",
    "question": "When placing the two stab incisions for loop drainage, how should they be positioned?",
    "options": {
      "A": "Side by side at the center of the abscess so both openings drain together",
      "B": "At the poles of the abscess, separated so the loop traverses the full cavity",
      "C": "As two long incisions along the entire abscess length to maximize drainage",
      "D": "Through the most acidic central tissue where anesthetic penetrates most readily"
    },
    "answer": "B",
    "explanation": "The two incisions go at the poles of the abscess, separated enough that the loop traverses the full cavity, and each is kept small. Side-by-side or central placement defeats the technique, long incisions reopen the cosmetic disadvantage, and the central tissue is hardest to anesthetize."
  },
  {
    "id": 168,
    "chapter": 20,
    "domain": "Wound and Soft-Tissue Management",
    "question": "A 5-year-old has a fingertip pulp-space abscess (felon) with throbbing pain. Why does this require prompt drainage?",
    "options": {
      "A": "Felons are highly contagious and readily spread to other children through casual contact",
      "B": "Pressure within the closed septated compartment threatens blood supply to the distal phalanx",
      "C": "The abscess will resolve spontaneously within hours if simply soaked in warm water",
      "D": "A felon is always superficial and drains fully with a single transverse skin nick"
    },
    "answer": "B",
    "explanation": "A felon builds dangerous pressure within the closed septated fat compartment and threatens the blood supply to the distal phalanx, so it must be drained promptly with a carefully placed incision away from the neurovascular bundle. Many felons are best referred to a hand surgeon."
  },
  {
    "id": 169,
    "chapter": 20,
    "domain": "Wound and Soft-Tissue Management",
    "question": "After draining a simple 1.5 cm abscess in an otherwise healthy, afebrile child with no surrounding cellulitis, what is the role of antibiotics?",
    "options": {
      "A": "A full 14-day course of clindamycin is mandatory after every incision and drainage",
      "B": "Drainage alone is curative, and antibiotics add little for this simple abscess",
      "C": "Antibiotics should replace drainage as the primary treatment to avoid the procedure",
      "D": "Intravenous vancomycin is required because all pediatric abscesses are MRSA-driven"
    },
    "answer": "B",
    "explanation": "For a simple, drained, uncomplicated abscess in a healthy child, incision and drainage alone is curative and antibiotics add little. They are reserved for surrounding cellulitis, systemic signs, large or multiple lesions, immunocompromise, or high-risk sites, and never replace drainage."
  },
  {
    "id": 170,
    "chapter": 20,
    "domain": "Wound and Soft-Tissue Management",
    "question": "Which presentation should prompt concern for a necrotizing soft-tissue infection rather than a simple abscess?",
    "options": {
      "A": "A single fluctuant lesion with a central pointing head and mild surrounding warmth",
      "B": "Pain out of proportion to exam with rapidly advancing erythema, crepitus, and toxicity",
      "C": "An anechoic fluid pocket on ultrasound with no systemic signs or rapid spread",
      "D": "A small superficial buttock abscess in an infant that drains easily with one incision"
    },
    "answer": "B",
    "explanation": "Necrotizing soft-tissue infection announces itself with pain out of proportion, rapidly advancing erythema, crepitus, bullae, skin necrosis, and systemic toxicity, and is a surgical emergency that incision and drainage alone will not address. The other options describe routine drainable abscesses."
  },
  {
    "id": 171,
    "chapter": 20,
    "domain": "Wound and Soft-Tissue Management",
    "question": "A facial abscess lies within the danger triangle of the face. Why does this location warrant special caution and specialist involvement?",
    "options": {
      "A": "Facial skin is too thin to hold any packing material after the incision is made",
      "B": "It carries a risk of cavernous sinus thrombosis if the infection spreads intracranially",
      "C": "Abscesses there are always sterile and never require drainage or culture",
      "D": "The danger triangle has no blood supply, so anesthesia is impossible to achieve"
    },
    "answer": "B",
    "explanation": "Central-facial abscesses in the danger triangle risk cavernous sinus thrombosis from venous spread, so they demand specialist involvement and often imaging. The other statements are factually incorrect regarding facial anatomy, sterility, and blood supply."
  },
  {
    "id": 172,
    "chapter": 20,
    "domain": "Wound and Soft-Tissue Management",
    "question": "When adjunctive oral antibiotics are warranted after draining an abscess in a young child, which empiric agent covers community-associated MRSA?",
    "options": {
      "A": "Oral cephalexin, chosen specifically for its strong activity against MRSA isolates",
      "B": "Amoxicillin alone, which reliably covers methicillin-resistant Staphylococcus aureus",
      "C": "Doxycycline, the preferred first choice for children under eight years of age",
      "D": "Clindamycin, dosed about 10 to 13 mg/kg per dose three times daily by weight"
    },
    "answer": "D",
    "explanation": "Clindamycin (10 to 13 mg/kg per dose three times daily) covers community-associated MRSA empirically. Amoxicillin and cephalexin do not reliably cover MRSA, and doxycycline is reserved for children over eight years, not the preferred agent in a young child."
  },
  {
    "id": 173,
    "chapter": 21,
    "domain": "Wound and Soft-Tissue Management",
    "question": "Why is the adult rule of nines unreliable for estimating burn surface area in young children?",
    "options": {
      "A": "It ignores the proportionally large pediatric head, so the Lund-Browder chart is used",
      "B": "It overestimates the limbs, which contribute far more surface area in infants",
      "C": "It applies only to full-thickness burns and cannot be used for partial-thickness wounds",
      "D": "It requires the patient's entire palm, which is impractical at the bedside in children"
    },
    "answer": "A",
    "explanation": "The rule of nines is unreliable below about age 14 because it ignores the relatively large pediatric head; the Lund-Browder chart with age-specific percentages is used instead. The limbs contribute proportionally less, not more, in infants, and the rule is not depth-specific."
  },
  {
    "id": 174,
    "chapter": 21,
    "domain": "Wound and Soft-Tissue Management",
    "question": "When tallying total body surface area burned to drive fluid resuscitation, which burns are excluded from the calculation?",
    "options": {
      "A": "Deep partial-thickness burns, because their depth cannot be reliably determined",
      "B": "Superficial epidermal burns, the dry erythematous sunburn-like lesions, are excluded",
      "C": "Full-thickness burns, since they require grafting rather than fluid resuscitation",
      "D": "Any blistered burn, because intact blisters keep the fluid within the wound itself"
    },
    "answer": "B",
    "explanation": "Only partial-thickness and full-thickness burns are counted; superficial epidermal burns are excluded entirely, and including simple erythema dangerously inflates TBSA and triggers over-resuscitation. Deep partial-thickness, full-thickness, and blistered burns all count toward TBSA."
  },
  {
    "id": 175,
    "chapter": 21,
    "domain": "Wound and Soft-Tissue Management",
    "question": "Using the palmar method to estimate scattered burns in a child, what does one palm represent and whose palm is used?",
    "options": {
      "A": "The patient's own palm including fingers represents about 1 percent of that child's TBSA",
      "B": "The clinician's palm represents 1 percent, since adult and child ratios are equivalent",
      "C": "The patient's palm excluding fingers represents 5 percent of total body surface area",
      "D": "Either palm represents 9 percent, matching one segment of the adult rule of nines"
    },
    "answer": "A",
    "explanation": "The patient's own palm including the fingers represents approximately 1 percent of that child's TBSA, and the patient's palm must be used because the ratio holds only against the patient's own body, not the clinician's."
  },
  {
    "id": 176,
    "chapter": 21,
    "domain": "Wound and Soft-Tissue Management",
    "question": "A full-thickness burn is being assessed. Which set of findings is characteristic of this depth?",
    "options": {
      "A": "Moist, pink, exquisitely tender skin that blisters and blanches briskly with pressure",
      "B": "Leathery, dry, inelastic skin that is insensate to pinprick and does not blanch",
      "C": "Dry red skin resembling sunburn that blanches and heals within one week without scar",
      "D": "Mottled red and white skin with sluggish blanching that heals in two to three weeks"
    },
    "answer": "B",
    "explanation": "Full-thickness burns destroy the entire dermis, leaving leathery, dry, inelastic, insensate skin that does not blanch and requires grafting. Moist tender blistering skin is superficial partial-thickness, dry red sunburn-like skin is superficial, and mottled sluggish-blanching skin is deep partial-thickness."
  },
  {
    "id": 177,
    "chapter": 21,
    "domain": "Wound and Soft-Tissue Management",
    "question": "A 20 kg child has a 30 percent TBSA burn. Using the Parkland formula, what is the total 24-hour fluid volume and the first-8-hour portion?",
    "options": {
      "A": "600 mL total, with half given in the first 16 hours and half over the next 8 hours",
      "B": "1,200 mL total, with 600 mL given over the first 8 hours from the time of arrival",
      "C": "4,800 mL total, with all of it delivered evenly across the full 24-hour period",
      "D": "2,400 mL total, with 1,200 mL given over the first 8 hours from the time of injury"
    },
    "answer": "D",
    "explanation": "Parkland gives 4 mL times 20 kg times 30 percent, which equals 2,400 mL over 24 hours, with half (1,200 mL) in the first 8 hours counted from the time of injury, not arrival. The other totals miscalculate the formula or its time distribution."
  },
  {
    "id": 178,
    "chapter": 21,
    "domain": "Wound and Soft-Tissue Management",
    "question": "Which crystalloid is preferred for burn fluid resuscitation, and why is large-volume normal saline avoided?",
    "options": {
      "A": "Lactated Ringer's, because large-volume normal saline causes hyperchloremic acidosis",
      "B": "Half-normal saline, because its lower sodium content matches pediatric maintenance needs",
      "C": "5 percent albumin, because colloid is given throughout the entire first 24 hours",
      "D": "Dextrose 5 percent in water, because burn patients are primarily at risk of hypoglycemia"
    },
    "answer": "A",
    "explanation": "Warmed lactated Ringer's is preferred because large volumes of normal saline produce hyperchloremic metabolic acidosis. Dextrose-containing fluid is used for the separate maintenance component, not resuscitation, and colloid is avoided during the first 24 hours of the Parkland approach."
  },
  {
    "id": 179,
    "chapter": 21,
    "domain": "Wound and Soft-Tissue Management",
    "question": "Burn resuscitation is titrated to physiologic endpoints. What urine output target is used for a child weighing less than 30 kg?",
    "options": {
      "A": "0.5 mL per kilogram per hour, the same target used for larger adolescents",
      "B": "1 mL per kilogram per hour, the most reliable bedside endpoint in small children",
      "C": "A fixed 30 mL per hour regardless of the child's weight or burn size",
      "D": "3 mL per kilogram per hour, deliberately driving brisk diuresis to flush toxins"
    },
    "answer": "B",
    "explanation": "Urine output is the most reliable endpoint, with a target of 1 mL/kg/hr in children under 30 kg and 0.5 mL/kg/hr in larger children and adolescents. A fixed adult rate ignores weight, and 3 mL/kg/hr would reflect over-resuscitation."
  },
  {
    "id": 180,
    "chapter": 21,
    "domain": "Wound and Soft-Tissue Management",
    "question": "A child with a circumferential full-thickness forearm burn is in early high-volume resuscitation. Which finding most appropriately prompts escharotomy?",
    "options": {
      "A": "Progressive loss of the distal Doppler arterial signal with a tense, woody compartment",
      "B": "Loss of the palpable distal pulse, which is the earliest reliable warning sign",
      "C": "Mild erythema and blistering at the burn margins with intact distal sensation",
      "D": "A single episode of pain at the burn site relieved promptly by oral analgesia"
    },
    "answer": "A",
    "explanation": "Progressive diminution or loss of the Doppler signal with a tense, woody compartment is a strong indication to release the eschar; loss of the distal pulse is a late, ominous finding, not an early one. Mild marginal burns and transient pain do not mandate escharotomy."
  },
  {
    "id": 181,
    "chapter": 21,
    "domain": "Wound and Soft-Tissue Management",
    "question": "When performing a limb escharotomy, where are the incisions placed and how deep should they go?",
    "options": {
      "A": "In a single dorsal incision through skin, fat, and the deep compartment fascia",
      "B": "Along the anterior and posterior midlines, dividing the muscle fascia completely",
      "C": "Along the mid-medial and mid-lateral lines, through the eschar down to but not through fat",
      "D": "Circumferentially around the limb, excising the entire eschar back to viable muscle"
    },
    "answer": "C",
    "explanation": "Limb escharotomy incisions run along the mid-medial and mid-lateral lines, cutting through the full thickness of eschar down to but not through the subcutaneous fat until the edges spring apart. Dividing the muscle fascia is fasciotomy, a separate, more aggressive procedure."
  },
  {
    "id": 182,
    "chapter": 21,
    "domain": "Wound and Soft-Tissue Management",
    "question": "Which topical agent is preferred for facial and superficial partial-thickness burns in children?",
    "options": {
      "A": "Dry gauze alone with no topical agent, leaving the deroofed wound open to air",
      "B": "Silver sulfadiazine, which is the preferred agent for facial burns in young infants",
      "C": "Full-strength povidone-iodine scrubbed directly into the burn wound bed twice daily",
      "D": "Bacitracin ointment, which is non-staining, painless, and well tolerated on the face"
    },
    "answer": "D",
    "explanation": "Bacitracin is preferred for facial and superficial partial-thickness burns because it is non-staining, painless, and well tolerated. Silver sulfadiazine is avoided on the face and in infants under two months, antiseptics impair healing, and deroofed wounds must be covered, not left open."
  },
  {
    "id": 183,
    "chapter": 21,
    "domain": "Wound and Soft-Tissue Management",
    "question": "How should an intact small blister (under 1 cm) over the palm be managed in a pediatric burn?",
    "options": {
      "A": "It requires immediate silver sulfadiazine injection beneath the intact blister roof",
      "B": "It must always be deroofed immediately and the wound bed left open to air",
      "C": "It should be aspirated dry with a needle and then sealed with tissue adhesive",
      "D": "It may be left intact, as the overlying skin acts as a sterile biologic dressing"
    },
    "answer": "D",
    "explanation": "Small intact blisters under about 1 cm, especially over the palm, may be left intact because the overlying skin acts as a biologic dressing and the contained fluid is sterile. Large, tense, ruptured, or joint-overlying blisters are deroofed and then covered, never left open to air."
  },
  {
    "id": 184,
    "chapter": 22,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "In a skeletally immature child, why do forces that would tear a ligament in an adult instead injure the growth plate?",
    "options": {
      "A": "Pediatric ligaments are calcified and stronger than the adjacent metaphyseal bone",
      "B": "The physis is mechanically weaker than the surrounding ligament and bone in children",
      "C": "The periosteum is thin and inactive, offering the joint no mechanical protection",
      "D": "Children lack a physis entirely until puberty, so all force concentrates on cartilage"
    },
    "answer": "B",
    "explanation": "The physis is mechanically weaker than the surrounding ligament and bone in skeletally immature patients, so forces propagate through the growth plate instead of tearing a ligament. Pediatric periosteum is thick and active, and the physis is present throughout childhood until it closes."
  },
  {
    "id": 185,
    "chapter": 22,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "A child has point tenderness directly over the distal radial growth plate but normal-appearing radiographs. How should this be managed?",
    "options": {
      "A": "Treat as a Salter-Harris type IV injury requiring immediate operative fixation",
      "B": "Discharge with reassurance, since normal films exclude any physeal fracture",
      "C": "Treat as a Salter-Harris type I injury until proven otherwise and immobilize",
      "D": "Apply a circumferential cast and arrange routine follow-up in six weeks"
    },
    "answer": "C",
    "explanation": "A Salter-Harris type I fracture passes through the physis with no bony fragment and may appear radiographically normal, so point tenderness over a growth plate is treated as a type I injury until proven otherwise. Normal films do not exclude it, and acute swelling favors splinting over casting."
  },
  {
    "id": 186,
    "chapter": 22,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "Which Salter-Harris fracture is the most common, and what is its anatomic pattern?",
    "options": {
      "A": "Type I, a pure transverse separation through the physis with no bony fragment",
      "B": "Type II, which traverses the physis and exits through a metaphyseal wedge fragment",
      "C": "Type III, which crosses the physis and exits through the epiphysis into the joint",
      "D": "Type V, a crush injury of the physis that is usually recognized only in retrospect"
    },
    "answer": "B",
    "explanation": "Type II is the most common physeal injury, accounting for roughly 75 percent, and traverses the physis to exit through a triangular metaphyseal wedge (the Thurston-Holland fragment). Types I, III, and V describe different, less common patterns."
  },
  {
    "id": 187,
    "chapter": 22,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "Which displaced physeal fractures are generally appropriate for closed reduction in the emergency department?",
    "options": {
      "A": "Salter-Harris types III and IV, since their intra-articular surfaces reduce easily closed",
      "B": "Salter-Harris types I and II, which usually do well with closed reduction",
      "C": "Salter-Harris type V crush injuries, which respond best to immediate manipulation",
      "D": "All Salter-Harris types equally, regardless of joint or epiphyseal involvement"
    },
    "answer": "B",
    "explanation": "Closed reduction is reasonable and expected for displaced Salter-Harris I and II injuries, which rarely cause growth disturbance. Displaced type III and IV fractures are intra-articular and demand orthopedic involvement, and type V crush injuries are not improved by manipulation."
  },
  {
    "id": 188,
    "chapter": 22,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "Why should reduction near a physis be a single gentle attempt rather than repeated forceful manipulation?",
    "options": {
      "A": "Repeated forceful manipulation can crush the germinal cartilage and cause growth arrest",
      "B": "Repeated attempts are harmless but simply prolong the child's procedural sedation",
      "C": "A single attempt is required only because radiographs cannot be repeated safely",
      "D": "Forceful manipulation is encouraged since the thick periosteum protects the physis fully"
    },
    "answer": "A",
    "explanation": "Repeated, forceful manipulation can shear or crush the germinal cartilage on the epiphyseal side of the plate, producing a bony bridge and iatrogenic growth arrest. The goal is one gentle, well-analgesed reduction, escalating to orthopedic consultation rather than to greater force."
  },
  {
    "id": 189,
    "chapter": 22,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "What is the recommended intranasal fentanyl dose for analgesia before a pediatric orthopedic reduction?",
    "options": {
      "A": "10 mcg/kg via atomizer, delivered as a single large volume into one nostril",
      "B": "1 to 2 mg/kg via atomizer, the same dose as intravenous ketamine for reduction",
      "C": "0.02 mg/kg via atomizer, matching the standard pediatric atropine dosing range",
      "D": "1.5 to 2 mcg/kg via atomizer, split between nares when volume exceeds 1 mL per nostril"
    },
    "answer": "D",
    "explanation": "Intranasal fentanyl is dosed at 1.5 to 2 mcg/kg with an atomizer, split between both nares when the volume exceeds roughly 1 mL per nostril, with onset within minutes. The 1 to 2 mg/kg figure is IV ketamine, 0.02 mg/kg is atropine, and 10 mcg/kg far exceeds the fentanyl dose."
  },
  {
    "id": 190,
    "chapter": 22,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "An adolescent presents with an anterior shoulder dislocation. Which reduction technique is among the gentlest and most successful, requiring little force?",
    "options": {
      "A": "Direct downward pressure on the acromion while levering the humeral head superiorly",
      "B": "Abrupt traction-countertraction with maximal force applied along the abducted arm",
      "C": "Forced internal rotation of the adducted arm against firm resistance over seconds",
      "D": "Scapular manipulation, pushing the inferior scapular tip medially while rotating the top laterally"
    },
    "answer": "D",
    "explanation": "Scapular manipulation is among the gentlest and most successful techniques, requiring little force and often minimal sedation, by rotating the glenoid to release the humeral head. Abrupt or forceful traction risks injury, and the other described maneuvers are not standard reduction techniques."
  },
  {
    "id": 191,
    "chapter": 22,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "A dorsally dislocated metacarpophalangeal joint of the thumb resists longitudinal traction, and a sesamoid is seen within the joint space. What does this indicate and how is it managed?",
    "options": {
      "A": "An associated growth-plate fracture; reduce by hyperextending and pulling firmly",
      "B": "A simple dislocation; apply stronger longitudinal traction until it reduces with a clunk",
      "C": "A complex irreducible dislocation; flex the wrist and push the phalanx over the metacarpal",
      "D": "A normal variant; no reduction is needed and the joint should simply be buddy-taped"
    },
    "answer": "C",
    "explanation": "A sesamoid within the joint space signals volar plate entrapment and a complex irreducible dislocation; longitudinal traction tightens the noose. The correct maneuver flexes the wrist to relax the flexor tendons and applies dorsally directed pressure pushing the phalanx over the metacarpal head."
  },
  {
    "id": 192,
    "chapter": 22,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "When reducing a dorsally angulated distal radius fracture, which type of malalignment must never be accepted at any age?",
    "options": {
      "A": "Any residual angulation in the plane of motion of the adjacent wrist joint",
      "B": "Up to 15 to 20 degrees of dorsal angulation in a young child with growth remaining",
      "C": "Complete bayonet apposition with maintained length in a very young toddler",
      "D": "Rotational malalignment, because it does not remodel with subsequent skeletal growth"
    },
    "answer": "D",
    "explanation": "Rotational malalignment is never accepted at any age because it does not remodel. In contrast, dorsal angulation up to 15 to 20 degrees and bayonet apposition with maintained length may remodel and be accepted in a young child, particularly in the plane of joint motion."
  },
  {
    "id": 193,
    "chapter": 22,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "After reducing a forearm fracture, why is acute immobilization with a splint preferred over a circumferential cast?",
    "options": {
      "A": "A splint eliminates the need for any post-reduction radiographs or follow-up imaging",
      "B": "A circumferential cast is mechanically weaker and cannot hold the reduced alignment",
      "C": "A splint accommodates post-injury swelling, whereas a tight cast can cause compartment syndrome",
      "D": "A cast must be avoided permanently because plaster never sets hard enough in children"
    },
    "answer": "C",
    "explanation": "A splint accommodates the swelling that predictably follows a fresh fracture, while a circumferential cast can constrict as edema rises and set up compartment syndrome. The rule is to splint acutely and convert to a cast at follow-up; post-reduction films are still required."
  },
  {
    "id": 194,
    "chapter": 22,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "A torus (buckle) fracture of the distal radius is identified in a 6-year-old. How should this stable injury be managed?",
    "options": {
      "A": "Closed reduction under ketamine sedation followed by a long-arm circumferential cast",
      "B": "Immobilization alone, often with a removable wrist splint, since it rarely re-displaces",
      "C": "Operative pinning, because buckle fractures are inherently unstable physeal injuries",
      "D": "Completing the intact cortex first, as is required for greenstick fracture patterns"
    },
    "answer": "B",
    "explanation": "Torus fractures are stable compression injuries that need only immobilization, often with a removable wrist splint, and rarely re-displace. Reduction and operative fixation are unnecessary, and completing the cortex applies to greenstick fractures, not buckle fractures."
  },
  {
    "id": 195,
    "chapter": 23,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "A 7-year-old presents with a distal radius fracture sustained 2 hours ago, with moderate swelling already developing. Which immobilization approach is most appropriate in the emergency department?",
    "options": {
      "A": "A circumferential plaster cast applied from hand to mid-humerus snugly",
      "B": "A circumferential fiberglass cast molded tightly around the forearm",
      "C": "An elastic compression wrap alone with no rigid support material",
      "D": "A non-circumferential splint that crosses the wrist and elbow joints"
    },
    "answer": "D",
    "explanation": "Acute fractures swell over 24 to 72 hours, so a non-circumferential splint that immobilizes the joints above and below is used. A circumferential cast applied acutely (B, C) risks compartment syndrome. An elastic wrap alone (D) provides no immobilization."
  },
  {
    "id": 196,
    "chapter": 23,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "When preparing dip water for a plaster splint on a child, which water temperature minimizes the risk of a thermal burn during the exothermic setting reaction?",
    "options": {
      "A": "Body-temperature water at exactly 37 degrees Celsius for comfort",
      "B": "Ice-cold water under 10 degrees Celsius to prevent any heat",
      "C": "Cool to lukewarm water at approximately 21 to 24 degrees Celsius",
      "D": "Hot water near 49 degrees Celsius to speed up the setting"
    },
    "answer": "C",
    "explanation": "Dip water of 21 to 24 degrees Celsius (70 to 75 F) limits peak temperature. Hot water (B) accelerates an uncontrolled set and burns. Very cold water (C) impairs setting. Body temperature (D) is warmer than recommended and raises burn risk."
  },
  {
    "id": 197,
    "chapter": 23,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "While building a splint, the clinician applies cast padding over the stockinette. Which technique correctly describes proper padding application?",
    "options": {
      "A": "Stretch the padding tightly proximal to distal in a single thin layer",
      "B": "Place padding only at the splint ends and leave the shaft uncovered",
      "C": "Apply ten uniform layers everywhere with no extra over bony points",
      "D": "Roll distal to proximal with each turn overlapping the previous by 50 percent"
    },
    "answer": "D",
    "explanation": "Padding is rolled distal to proximal with 50 percent overlap, snug but not stretched, with extra over bony prominences. Stretching it (B) constricts. Excessive uniform layers without protecting prominences (C) is wrong. Leaving the shaft bare (D) invites skin injury."
  },
  {
    "id": 198,
    "chapter": 23,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "A toddler with a displaced distal radius fracture needs a construct that also controls forearm pronation and supination pending reduction. Which splint best accomplishes this?",
    "options": {
      "A": "Simple volar forearm splint ending just below the elbow joint",
      "B": "Ulnar gutter splint immobilizing the fourth and fifth metacarpals",
      "C": "Sugar-tong splint encircling the flexed elbow and the volar forearm",
      "D": "Thumb spica splint encircling the thumb and radial forearm border"
    },
    "answer": "C",
    "explanation": "The sugar-tong splint passes around the elbow and controls pronation and supination. A volar slab (B) cannot control rotation. The ulnar gutter (C) is for fourth and fifth ray fractures. The thumb spica (D) is for scaphoid injuries."
  },
  {
    "id": 199,
    "chapter": 23,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "A child has a displaced supracondylar humerus fracture requiring a long-arm posterior splint. At what elbow position should the limb be immobilized?",
    "options": {
      "A": "In full flexion with the hand touching the shoulder for stability",
      "B": "In full extension at zero degrees to maximize bony alignment",
      "C": "At hyperextension beyond neutral to keep the fragments distracted",
      "D": "At a less acute angle near 70 degrees to protect antecubital structures"
    },
    "answer": "D",
    "explanation": "The supracondylar fracture is splinted near 70 degrees because tight flexion compresses the antecubital structures and can compromise the brachial artery and median nerve. Full flexion (B) is dangerous. Full extension (C) and hyperextension (D) do not control the fracture."
  },
  {
    "id": 200,
    "chapter": 23,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "A clinician molds a freshly applied splint to maintain a fracture reduction. Which technique correctly describes three-point molding?",
    "options": {
      "A": "Press firmly with the fingertips at the apex of the fracture deformity",
      "B": "Leave the splint perfectly flat and rely on the elastic wrap tension",
      "C": "Rock and reposition the limb repeatedly until the plaster fully hardens",
      "D": "Apply sustained broad-palm pressure opposing the deforming force as it cures"
    },
    "answer": "D",
    "explanation": "Three-point molding uses the broad flats of the palms with sustained pressure opposing the deforming force. Fingertips (B) leave focal pressure sores. Rocking during cure (C) cracks the lamination. A flat splint (D) immobilizes but does not hold a reduction."
  },
  {
    "id": 201,
    "chapter": 23,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "A posterior long-leg splint is applied for a tibial shaft fracture. Which feature is correct for this construct in a child?",
    "options": {
      "A": "Use only six thin plaster layers since the leg bears little weight",
      "B": "Hold the knee in full extension and the ankle in plantarflexion",
      "C": "Pad the fibular head carefully to protect the superficial peroneal nerve",
      "D": "Discharge the child weight-bearing without crutches or a wheelchair"
    },
    "answer": "C",
    "explanation": "The fibular head must be padded to protect the peroneal nerve. The knee is held in slight flexion and ankle at neutral, not extension and plantarflexion (B). A weight-bearing limb needs thicker layers (C). The patient is non-weight-bearing and needs crutches (D)."
  },
  {
    "id": 202,
    "chapter": 23,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "After splint application, a caregiver should be taught return precautions. Which symptom is the cardinal early warning sign of compartment syndrome?",
    "options": {
      "A": "Mild itching beneath the splint relieved by gentle scratching",
      "B": "A faint plaster odor noted during the first day of wear",
      "C": "Pain out of proportion to the injury not relieved by analgesia",
      "D": "Loss of the distal pulse with a cold pale extremity early on"
    },
    "answer": "C",
    "explanation": "Pain out of proportion, escalating with passive stretch, is the cardinal early warning. Itching (B) is common and benign. Pulselessness (C) is a late and ominous finding, not early. A faint odor (D) of fresh plaster is not concerning unless foul."
  },
  {
    "id": 203,
    "chapter": 23,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "A neurovascular examination is documented before and after splinting. Which finding represents normal distal perfusion in the splinted limb?",
    "options": {
      "A": "Capillary refill under 2 seconds with warm pink exposed digits",
      "B": "Absent sensation throughout the median and ulnar nerve territories",
      "C": "Capillary refill of 5 seconds with dusky cool fingertip color",
      "D": "Fingertips fully covered by the elastic wrap and not observable"
    },
    "answer": "A",
    "explanation": "Normal perfusion shows capillary refill under 2 seconds with warm, pink digits. A 5-second refill with dusky cool color (B) is abnormal. Absent sensation (C) is a deficit. Fingertips must be left exposed, not covered by the wrap (D), for monitoring."
  },
  {
    "id": 204,
    "chapter": 23,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "A family is given aftercare instructions for a newly splinted forearm fracture. Which instruction is correct for the first 48 to 72 hours?",
    "options": {
      "A": "Apply ice directly against the skin beneath the splint padding",
      "B": "Soak the plaster splint daily in warm water to keep it pliable",
      "C": "Elevate the limb above the heart and apply ice over, not under, the splint",
      "D": "Keep the limb dependent below the heart to improve arterial inflow"
    },
    "answer": "C",
    "explanation": "Elevation above the heart with ice applied over the splint limits swelling. A dependent limb (B) worsens edema. Ice under the splint against skin (C) risks injury. Plaster must be kept dry, never soaked (D), because moisture macerates skin and degrades it."
  },
  {
    "id": 205,
    "chapter": 23,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "Compared with adults, which pediatric consideration most directly reinforces using cool dip water and modest slab thickness in children?",
    "options": {
      "A": "Pediatric skin tolerates heat far better and resists thermal burns easily",
      "B": "Children have thinner periosteum so fractures need fewer immobilization weeks",
      "C": "Children require more plaster layers because their bones are denser",
      "D": "A larger surface-area-to-mass ratio raises relative skin temperature during cure"
    },
    "answer": "D",
    "explanation": "Children have a larger surface-area-to-mass ratio, so the same exothermic load reaches a higher relative skin temperature. The pediatric periosteum is actually thick (B). Children do not tolerate heat better (C), and they need proportionally less plaster, not more (D)."
  },
  {
    "id": 206,
    "chapter": 24,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "A febrile 3-year-old refuses to bear weight and holds the knee in a position of maximal capsular volume. What is the single greatest harm in this evaluation?",
    "options": {
      "A": "Obtaining an erythrocyte sedimentation rate before the aspiration",
      "B": "Sending the synovial fluid for both Gram stain and culture studies",
      "C": "Aspirating the joint and introducing infection into a sterile space",
      "D": "Failure to aspirate the joint and thereby delaying diagnosis of infection"
    },
    "answer": "D",
    "explanation": "The single greatest harm is failure to aspirate, since delayed diagnosis of pyogenic arthritis carries a far worse prognosis than the small procedural risk. Aspirating (B) carries minimal risk. Gram stain and culture (C) and ESR (D) are appropriate adjuncts."
  },
  {
    "id": 207,
    "chapter": 24,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "Before knee arthrocentesis you note overlying skin findings. Which is the principal contraindication to passing the needle at the planned site?",
    "options": {
      "A": "A history of prior uncomplicated arthrocentesis on the same knee",
      "B": "A clear pale-yellow effusion palpable in the suprapatellar pouch",
      "C": "Cellulitis or skin infection overlying the intended puncture site",
      "D": "Mild atraumatic joint warmth without any overlying skin breakdown"
    },
    "answer": "C",
    "explanation": "Overlying cellulitis is the principal contraindication, because the needle can seed a sterile joint with infection. A palpable effusion (B) is the indication. Joint warmth (C) and prior aspiration (D) are not contraindications to the procedure."
  },
  {
    "id": 208,
    "chapter": 24,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "You perform a knee arthrocentesis using the classic superolateral approach. Where is the needle inserted?",
    "options": {
      "A": "At the inferior pole of the patella aimed toward the tibial plateau",
      "B": "Two fingerbreadths medial to the tibial tuberosity below the joint",
      "C": "Directly through the center of the patella into the bone marrow",
      "D": "One fingerbreadth superior and lateral to the superolateral patellar pole"
    },
    "answer": "D",
    "explanation": "The superolateral approach enters one fingerbreadth superior and one lateral to the superolateral patellar pole, directing the needle beneath the patella. Through the patella (B) is wrong. The inferior pole (C) and a point near the tuberosity (D) are not the described landmarks."
  },
  {
    "id": 209,
    "chapter": 24,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "Synovial fluid is aspirated from a swollen knee. Which cell count result most strongly suggests bacterial septic arthritis?",
    "options": {
      "A": "Greater than 50,000 white cells per microliter with neutrophil predominance",
      "B": "Fewer than 2,000 white cells per microliter with clear viscous fluid",
      "C": "A normal count but glucose slightly below the paired serum value",
      "D": "About 2,000 to 10,000 cells per microliter with lymphocyte predominance"
    },
    "answer": "A",
    "explanation": "Counts above 50,000 per microliter with greater than 75 percent neutrophils strongly suggest infection. Counts under 2,000 (B) are noninflammatory. A modest count with lymphocytes (C) is inflammatory but not classic for bacteria. Glucose adds limited value (D)."
  },
  {
    "id": 210,
    "chapter": 24,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "A 2-year-old presents with pseudoparalysis after being lifted by the wrist, holding the arm pronated with no swelling. What is the mechanism of nursemaid's elbow?",
    "options": {
      "A": "Rupture of the ulnar collateral ligament with valgus joint instability",
      "B": "The annular ligament slips over and entraps in the radiocapitellar joint",
      "C": "Posterior dislocation of the olecranon out of the trochlear groove",
      "D": "A complete fracture of the radial neck displaces the radial head distally"
    },
    "answer": "B",
    "explanation": "Longitudinal traction on a pronated extended forearm causes the annular ligament to slip over the radial head and become entrapped. There is no fracture (B), dislocation (C), or collateral ligament rupture (D); the arm appears normal without bony tenderness."
  },
  {
    "id": 211,
    "chapter": 24,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "You elect to reduce a nursemaid's elbow. Which maneuver is the preferred first-line technique in contemporary practice?",
    "options": {
      "A": "Longitudinal traction with the forearm held in full neutral rotation",
      "B": "Direct posterior pressure on the olecranon with the elbow extended",
      "C": "Forced hyperextension of the elbow with the forearm fully supinated",
      "D": "Hyperpronation of the forearm with the elbow flexed to about ninety degrees"
    },
    "answer": "D",
    "explanation": "Hyperpronation is preferred because studies show higher first-attempt success and possibly less pain than supination-flexion. Neutral traction (B), forced hyperextension (C), and olecranon pressure (D) are not validated reduction maneuvers for this injury."
  },
  {
    "id": 212,
    "chapter": 24,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "After a successful nursemaid's elbow reduction, when do most children typically resume normal use of the arm?",
    "options": {
      "A": "Immediately and instantaneously the moment the click is felt",
      "B": "Not until a follow-up orthopedic appointment one week later",
      "C": "Within about five to thirty minutes, often reaching for an offered toy",
      "D": "Only after twenty-four to forty-eight hours of sling immobilization"
    },
    "answer": "C",
    "explanation": "Most children begin using the arm within five to thirty minutes, often reaching for a toy. Use is not immediate (B). A sling for one to two days (C) is reserved for failed reduction, and routine orthopedic delay (D) is unnecessary for a classic reduction."
  },
  {
    "id": 213,
    "chapter": 24,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "A toddler with a suspected nursemaid's elbow has point bony tenderness, swelling, and a history of a direct fall. What is the appropriate next step?",
    "options": {
      "A": "Attempt three reduction maneuvers before considering any imaging",
      "B": "Apply a long-arm cast in full flexion and discharge home",
      "C": "Proceed directly with hyperpronation reduction without imaging",
      "D": "Obtain radiographs to exclude a fracture before any manipulation"
    },
    "answer": "D",
    "explanation": "Atypical features (swelling, bony tenderness, a fall or direct blow) mandate radiographs to exclude fracture before further manipulation. Reduction (B, D) is inappropriate when fracture is suspected, and casting in full flexion (C) before diagnosis is not indicated."
  },
  {
    "id": 214,
    "chapter": 24,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "An obtunded child with a tibial fracture has a measured compartment pressure of 35 mmHg and a diastolic blood pressure of 60 mmHg. What is the delta pressure?",
    "options": {
      "A": "25 mmHg, which is below threshold and indicates fasciotomy is needed",
      "B": "95 mmHg, which is reassuring and excludes compartment syndrome",
      "C": "35 mmHg, which equals the compartment pressure and is normal",
      "D": "60 mmHg, which equals the diastolic pressure and needs no action"
    },
    "answer": "A",
    "explanation": "Delta pressure equals diastolic minus compartment pressure: 60 minus 35 equals 25 mmHg. A delta below 30 mmHg indicates compartment syndrome and the need for emergent fasciotomy. The other calculations (B, C, D) misapply the formula."
  },
  {
    "id": 215,
    "chapter": 24,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "Among the 6 P's of acute compartment syndrome, which finding is the earliest and most reliable sign that should prompt action?",
    "options": {
      "A": "Pain out of proportion and pain on passive stretch of the compartment muscles",
      "B": "Pallor of the skin distal to the affected fascial compartment",
      "C": "Poikilothermia with coolness of the involved limb on examination",
      "D": "Pulselessness of the distal extremity on palpation of the artery"
    },
    "answer": "A",
    "explanation": "Pain out of proportion and pain on passive stretch are the earliest and most reliable signs. Pulselessness (B) is a late, ominous finding; waiting for it guarantees irreversible damage. Pallor (C) and poikilothermia (D) appear later in the progression."
  },
  {
    "id": 216,
    "chapter": 24,
    "domain": "Orthopedic and Splinting Procedures",
    "question": "While arranging emergent fasciotomy for compartment syndrome, which interim measure is appropriate for the affected limb?",
    "options": {
      "A": "Remove constricting casts and keep the limb at heart level, not elevated",
      "B": "Lower the systemic blood pressure to reduce arterial inflow pressure",
      "C": "Apply a tight circumferential compressive wrap to limit further edema",
      "D": "Elevate the limb well above the heart to reduce the swelling quickly"
    },
    "answer": "A",
    "explanation": "Pending operative release, remove constricting casts and keep the limb at heart level rather than elevated, since elevation lowers perfusion pressure. Elevation (B) worsens ischemia. A compressive wrap (C) and induced hypotension (D) both reduce perfusion harmfully."
  },
  {
    "id": 217,
    "chapter": 25,
    "domain": "Trauma and Thoracic Procedures",
    "question": "A child with blunt chest trauma is hypotensive with absent breath sounds and hyperresonance on the right. How is tension pneumothorax best diagnosed in this setting?",
    "options": {
      "A": "By chest radiograph obtained before any decompression is attempted",
      "B": "By arterial blood gas demonstrating a falling partial pressure of oxygen",
      "C": "By CT angiography of the chest to confirm mediastinal shift first",
      "D": "Clinically at the bedside, treating immediately without waiting for a chest film"
    },
    "answer": "D",
    "explanation": "Tension pneumothorax in a child is a clinical diagnosis treated immediately; waiting for a chest film in an unstable patient is a fatal error. Radiography (B), CT (C), and blood gas (D) all introduce dangerous delay in a deteriorating patient."
  },
  {
    "id": 218,
    "chapter": 25,
    "domain": "Trauma and Thoracic Procedures",
    "question": "You perform needle decompression in a school-age child. Which site is now the preferred alternative because the chest wall there is thinner in most pediatric patients?",
    "options": {
      "A": "Eighth intercostal space at the posterior axillary line near the scapula",
      "B": "Directly over the sternum in the midline at the angle of Louis",
      "C": "Fourth or fifth intercostal space at the anterior axillary line",
      "D": "Second intercostal space at the midclavicular line on the affected side"
    },
    "answer": "C",
    "explanation": "The fourth or fifth intercostal space at the anterior axillary line offers a thinner chest wall and is the preferred alternative. The second intercostal midclavicular site (B) is thicker. The posterior axillary (C) and sternal (D) locations are not used."
  },
  {
    "id": 219,
    "chapter": 25,
    "domain": "Trauma and Thoracic Procedures",
    "question": "When inserting a needle or tube into the chest wall over a rib interspace, why must the device pass immediately superior to the rib?",
    "options": {
      "A": "To enter through the thickest part of the intercostal muscle layer",
      "B": "To avoid the neurovascular bundle running along the inferior rib margin",
      "C": "To intentionally puncture the intercostal artery for controlled bleeding",
      "D": "To direct the tip downward toward the abdominal cavity for drainage"
    },
    "answer": "B",
    "explanation": "The neurovascular bundle runs along the inferior margin of each rib, so the device is inserted superior to the rib to avoid it. The goal is not to puncture vessels (B), enter thick muscle (C), or aim toward the abdomen (D), which risks visceral injury."
  },
  {
    "id": 220,
    "chapter": 25,
    "domain": "Trauma and Thoracic Procedures",
    "question": "In an intubated peri-arrest child, many trauma services now favor finger thoracostomy over needle decompression. What is the chief advantage?",
    "options": {
      "A": "It is less painful in an awake, spontaneously breathing alert child",
      "B": "It can be left in place for days without any risk of clotting or kinking",
      "C": "It reliably reaches the pleura and decompresses both air and blood by feel",
      "D": "It depends on catheter length to confirm correct pleural entry"
    },
    "answer": "C",
    "explanation": "Finger thoracostomy reliably reaches the pleura, decompresses air and blood, and confirms entry by feel, independent of catheter length. It is more painful in awake patients (B). It does not depend on catheter length (C); the open tract is a bridge, not a long-term device (D)."
  },
  {
    "id": 221,
    "chapter": 25,
    "domain": "Trauma and Thoracic Procedures",
    "question": "A 4 kg infant requires a chest tube for a simple pneumothorax. Which approximate French size best matches this weight and indication?",
    "options": {
      "A": "A 24 to 32 French tube directed toward the costophrenic base",
      "B": "A 32 to 38 French adult-size tube for adequate apical drainage",
      "C": "A 28 to 32 French tube to ensure rapid drainage of the air",
      "D": "A 10 to 12 French tube, or a pigtail catheter for the air alone"
    },
    "answer": "D",
    "explanation": "Infants of 3 to 5 kg use a 10 to 12 French tube, and a small-bore tube or pigtail (8 to 14 Fr) drains air adequately with less pain. Sizes of 28 to 38 Fr (B, C, D) are for much larger children or hemothorax requiring large bore."
  },
  {
    "id": 222,
    "chapter": 25,
    "domain": "Trauma and Thoracic Procedures",
    "question": "You are positioning a child for tube thoracostomy and identify the safe triangle. Which structures border this triangle?",
    "options": {
      "A": "Sternocleidomastoid superiorly, clavicle inferiorly, trachea medially",
      "B": "Trapezius superiorly, deltoid laterally, axillary fold inferiorly",
      "C": "Pectoralis major anteriorly, latissimus dorsi posteriorly, nipple line inferiorly",
      "D": "Sternum medially, mid-scapular line laterally, diaphragm inferiorly"
    },
    "answer": "C",
    "explanation": "The safe triangle is bordered anteriorly by pectoralis major, posteriorly by latissimus dorsi, and inferiorly by the nipple line, with the apex below the axilla. The other boundaries (B, C, D) describe unrelated regions and would risk misplacement of the tube."
  },
  {
    "id": 223,
    "chapter": 25,
    "domain": "Trauma and Thoracic Procedures",
    "question": "During tube thoracostomy in a child, which instrument should never be used to enter the pleural space?",
    "options": {
      "A": "A scalpel used only to make the initial transverse skin incision",
      "B": "A curved Kelly clamp used for blunt dissection through the muscle",
      "C": "A sharp trocar, which causes catastrophic lung and cardiac lacerations",
      "D": "A gloved finger inserted to confirm intrapleural position and sweep"
    },
    "answer": "C",
    "explanation": "A sharp trocar is responsible for catastrophic lung and cardiac lacerations and is never used in children. Blunt dissection with a Kelly clamp (B), a finger sweep (C), and an initial skin incision with a scalpel (D) are all correct steps of the technique."
  },
  {
    "id": 224,
    "chapter": 25,
    "domain": "Trauma and Thoracic Procedures",
    "question": "After chest tube placement you observe the underwater seal system. Which finding confirms tube patency and communication with the pleural space?",
    "options": {
      "A": "Tidaling, the rise and fall of the water-seal fluid column with respiration",
      "B": "Complete absence of any fluid level movement in the water-seal chamber",
      "C": "Continuous vigorous bubbling that never stops in the collection chamber",
      "D": "A static fluid column that does not move regardless of breathing effort"
    },
    "answer": "A",
    "explanation": "Tidaling, the fluid column rising and falling with respiration, confirms patency and pleural communication. Loss of tidaling (B, D) suggests obstruction, kinking, or full re-expansion. Continuous bubbling (C) indicates an air leak, not patency."
  },
  {
    "id": 225,
    "chapter": 25,
    "domain": "Trauma and Thoracic Procedures",
    "question": "Emergency department thoracotomy is being considered in a child. Which scenario represents the most reasonable indication?",
    "options": {
      "A": "Asystole without tamponade after thirty minutes of field resuscitation",
      "B": "Penetrating thoracic trauma with signs of life lost witnessed in the department",
      "C": "A stable child with an isolated simple pneumothorax and normal vitals",
      "D": "Blunt trauma arrival with no signs of life after prolonged prehospital CPR"
    },
    "answer": "B",
    "explanation": "Thoracotomy is reasonable in penetrating thoracic trauma with witnessed loss of vital signs and short arrest times. Blunt trauma with no signs of life (B) and asystole without tamponade (C) portend futility. A stable pneumothorax (D) needs only a tube."
  },
  {
    "id": 226,
    "chapter": 25,
    "domain": "Trauma and Thoracic Procedures",
    "question": "During emergency thoracotomy the pericardium is opened to relieve tamponade. To avoid injury, the incision should be made in which orientation?",
    "options": {
      "A": "Longitudinally and anterior to the phrenic nerve to expose the heart",
      "B": "Through the phrenic nerve itself to gain the widest cardiac exposure",
      "C": "Posterior to the phrenic nerve along the diaphragmatic surface",
      "D": "Transversely directly across the course of the phrenic nerve fibers"
    },
    "answer": "A",
    "explanation": "The pericardium is opened longitudinally and anterior to the phrenic nerve to relieve tamponade while sparing the nerve. Cutting across (B), posterior to (C), or through (D) the phrenic nerve risks diaphragmatic paralysis and is incorrect."
  },
  {
    "id": 227,
    "chapter": 25,
    "domain": "Trauma and Thoracic Procedures",
    "question": "A 20 kg child has a chest tube placed for hemothorax. Which ongoing output should prompt consideration of surgical exploration?",
    "options": {
      "A": "Bloody output exceeding 2 to 3 mL/kg per hour on continuous monitoring",
      "B": "A single initial output of about 1 mL/kg drained over the first hour",
      "C": "Output that falls below 1 to 2 mL/kg per day after several days",
      "D": "Serous straw-colored drainage of 0.5 mL/kg per hour after one week"
    },
    "answer": "A",
    "explanation": "Ongoing bloody output exceeding 2 to 3 mL/kg per hour, or an initial output over 15 to 20 mL/kg, signals a need for surgical exploration. A small initial output (B), declining output before removal (C), and minimal late serous drainage (D) are reassuring."
  },
  {
    "id": 228,
    "chapter": 25,
    "domain": "Trauma and Thoracic Procedures",
    "question": "Why must a bubbling chest tube never be clamped during patient transport?",
    "options": {
      "A": "Clamping improves drainage by raising pressure within the collection chamber",
      "B": "Clamping prevents re-expansion pulmonary edema during the transfer",
      "C": "Clamping can recreate a tension pneumothorax by trapping escaping air",
      "D": "Clamping is required to measure an accurate opening pleural pressure"
    },
    "answer": "C",
    "explanation": "A bubbling tube indicates an ongoing air leak; clamping it traps air and can recreate a tension pneumothorax. Clamping does not improve drainage (B), measure pleural pressure (C), or prevent re-expansion edema (D); it is dangerous during transport."
  },
  {
    "id": 229,
    "chapter": 25,
    "domain": "Trauma and Thoracic Procedures",
    "question": "A pigtail catheter is increasingly used for simple pneumothorax. Why is it a poor choice for a hemothorax?",
    "options": {
      "A": "It cannot be placed by a Seldinger over-the-wire technique",
      "B": "It causes more tissue trauma than a large-bore surgical tube",
      "C": "Its narrow bore obstructs easily with blood and clot",
      "D": "It drains air far too rapidly and causes re-expansion edema"
    },
    "answer": "C",
    "explanation": "The pigtail catheter obstructs more easily with blood and is therefore a poor choice for hemothorax, which needs a larger bore. It is placed by Seldinger technique (B), causes less tissue trauma than a large tube (C), and is not characterized by overly rapid drainage (D)."
  },
  {
    "id": 230,
    "chapter": 25,
    "domain": "Trauma and Thoracic Procedures",
    "question": "A child with an open pneumothorax (sucking chest wound) arrives in the resuscitation bay. What is the correct initial dressing?",
    "options": {
      "A": "A fully sealed four-sided occlusive dressing taped on all edges",
      "B": "Immediate needle decompression at the midclavicular second space",
      "C": "A loose dry gauze pad held in place without any occlusion",
      "D": "A three-sided occlusive dressing that vents air on expiration"
    },
    "answer": "D",
    "explanation": "An open pneumothorax is sealed with a three-sided occlusive dressing that vents air on expiration while preventing entrainment on inspiration. A fully sealed dressing (B) can create tension. Needle decompression (C) and loose gauze (D) are not the indicated treatment."
  },
  {
    "id": 231,
    "chapter": 26,
    "domain": "Trauma and Thoracic Procedures",
    "question": "In a child under about eight years old, where does the fulcrum of cervical spine motion sit, and what injury pattern does this produce?",
    "options": {
      "A": "At C5 to C6, producing the lower cervical patterns seen in adults",
      "B": "At C2 to C3, producing high cervical injuries and atlanto-occipital dislocation",
      "C": "At the thoracolumbar junction, producing flexion-distraction injuries",
      "D": "At C7 to T1, producing predominantly stable spinous process fractures"
    },
    "answer": "B",
    "explanation": "The young child's large head and lax ligaments shift the fulcrum to C2 to C3, producing high cervical injuries. The C5 to C6 fulcrum (B) is the adult pattern. The thoracolumbar junction (C) and C7 to T1 (D) are not the pediatric cervical fulcrum."
  },
  {
    "id": 232,
    "chapter": 26,
    "domain": "Trauma and Thoracic Procedures",
    "question": "A child has transient neurologic symptoms after a fall, but plain films and CT are normal. Which condition must be presumed, and what imaging reveals it?",
    "options": {
      "A": "SCIWORA, with MRI as the study that reveals the cord lesion",
      "B": "Simple muscular strain, which requires no further imaging at all",
      "C": "A stable burst fracture, which a repeat CT will demonstrate clearly",
      "D": "An odontoid fracture, which plain radiographs always reliably show"
    },
    "answer": "A",
    "explanation": "SCIWORA (spinal cord injury without radiographic abnormality) is presumed when symptoms persist despite normal plain films and CT, and MRI reveals the lesion. A burst fracture (B) would show on CT. Strain (C) understates the risk, and CT was already normal (D)."
  },
  {
    "id": 233,
    "chapter": 26,
    "domain": "Trauma and Thoracic Procedures",
    "question": "When immobilizing a small child on a backboard, why is occipital offset (raising the torso) required for neutral cervical alignment?",
    "options": {
      "A": "The small occiput causes hyperextension that padding must correct",
      "B": "The large occiput forces the neck into flexion on a flat surface",
      "C": "The narrow shoulders require elevation above the head and occiput",
      "D": "The child's long neck needs traction applied through the head"
    },
    "answer": "B",
    "explanation": "The proportionally large head forces the cervical spine into flexion on a flat board, so the torso is raised until the external auditory meatus aligns with the shoulders. The occiput is large, not small (B). Traction (C) is avoided, and the issue is the head, not the shoulders (D)."
  },
  {
    "id": 234,
    "chapter": 26,
    "domain": "Trauma and Thoracic Procedures",
    "question": "When securing a child to a spinal immobilization device, what is the correct order of strapping?",
    "options": {
      "A": "Apply forehead and chin straps simultaneously before torso fixation",
      "B": "Secure the head with tape and blocks first, then strap the torso down",
      "C": "Strap across the chin to lock the jaw before any torso strapping",
      "D": "Secure the torso to the device first, then secure the head with blocks"
    },
    "answer": "D",
    "explanation": "Secure the torso first, then the head, because strapping the head before the body risks distracting the neck if the torso shifts. Head-first strapping (B) is unsafe. Straps must never cross the chin (C, D), which would block mouth opening and vomiting."
  },
  {
    "id": 235,
    "chapter": 26,
    "domain": "Trauma and Thoracic Procedures",
    "question": "A classic log-roll of a child with possible spinal injury is performed. Who controls the movement and overrides all other team members?",
    "options": {
      "A": "The most senior physician standing at the foot of the bed",
      "B": "The provider inspecting the back and sliding the transfer device",
      "C": "The provider at the head maintaining in-line stabilization and the count",
      "D": "Whichever torso provider feels the most resistance during the roll"
    },
    "answer": "C",
    "explanation": "The head provider directs the count, maintains in-line stabilization, and overrides all others because the cervical spine tolerates the least independent motion. The back inspector (B), torso providers (C), and a clinician at the foot (D) do not lead the roll."
  },
  {
    "id": 236,
    "chapter": 26,
    "domain": "Trauma and Thoracic Procedures",
    "question": "A two-person helmet removal is performed on an injured child. What is the role of the second provider positioned at the side?",
    "options": {
      "A": "Apply axial traction to the head while the helmet is expanded",
      "B": "Pull the helmet straight off in one quick motion without rocking it",
      "C": "Release the chin strap then take over in-line stabilization at the neck",
      "D": "Maintain helmet stabilization while the first provider applies a collar"
    },
    "answer": "C",
    "explanation": "The second provider cuts the chin strap and assumes in-line stabilization with hands at the occiput and mandible, while the first provider expands and rocks the helmet free. Pulling straight off (B) and applying traction (C) are wrong; the first provider applies the collar after removal (D)."
  },
  {
    "id": 237,
    "chapter": 26,
    "domain": "Trauma and Thoracic Procedures",
    "question": "A child has life-threatening extremity hemorrhage uncontrolled by direct pressure. How should a tourniquet be applied?",
    "options": {
      "A": "Avoid tourniquets in children because they always cause limb loss",
      "B": "Place it directly over the wound and tighten until oozing slows somewhat",
      "C": "Apply it loosely distal to the wound and release it every few minutes",
      "D": "Place it 5 to 7 cm proximal to the wound and tighten until the pulse stops"
    },
    "answer": "D",
    "explanation": "A tourniquet is placed 5 to 7 cm proximal to the wound and tightened until bleeding stops and the distal pulse is eliminated. Placement over (B) or distal to (C) the wound with intermittent release is wrong, and modern practice supports tourniquet use in children (D)."
  },
  {
    "id": 238,
    "chapter": 26,
    "domain": "Trauma and Thoracic Procedures",
    "question": "A child has a suspected pelvic fracture from a high-energy mechanism. Where should the pelvic binder be centered for effective hemorrhage control?",
    "options": {
      "A": "Around the upper thighs below the trochanters with legs externally rotated",
      "B": "Over the greater trochanters with the legs internally rotated and bound",
      "C": "Across the lower abdomen above the umbilicus to tamponade bleeding",
      "D": "Over the iliac crests, which provides the most effective compression"
    },
    "answer": "B",
    "explanation": "The binder is centered over the greater trochanters with legs internally rotated and bound. Placement over the iliac crests (B) compresses ineffectively and may worsen an open-book pattern. The abdomen (C) and upper thighs (D) are incorrect positions."
  },
  {
    "id": 239,
    "chapter": 26,
    "domain": "Trauma and Thoracic Procedures",
    "question": "An impaled object protrudes from a child's neck after trauma. What is the correct management of the object in the resuscitation bay?",
    "options": {
      "A": "Remove it immediately to allow direct pressure on the wound bed",
      "B": "Stabilize it in place and pad it, removing it only in the operating room",
      "C": "Twist it gently to dislodge any clot before applying a dressing",
      "D": "Pull it out slowly while packing hemostatic gauze behind it"
    },
    "answer": "B",
    "explanation": "An impaled object is stabilized and secured in place and removed only in the operating room with vascular control, because it may be tamponading a lacerated vessel. Removing (B, C) or manipulating (D) it in the bay can provoke catastrophic hemorrhage."
  },
  {
    "id": 240,
    "chapter": 26,
    "domain": "Trauma and Thoracic Procedures",
    "question": "In pediatric hemorrhagic shock, which statement about the cardiovascular response to blood loss is correct?",
    "options": {
      "A": "Bradycardia is the earliest and most reliable sign of compensated shock",
      "B": "Hypotension is a late sign appearing after 30 to 45 percent volume loss",
      "C": "Blood pressure falls steadily and proportionally with each milliliter lost",
      "D": "Hypotension appears early after only 10 percent of blood volume is lost"
    },
    "answer": "B",
    "explanation": "Children compensate until 30 to 45 percent of volume is lost, so hypotension is a late and ominous sign. It does not appear early (B). Tachycardia, not bradycardia, is the earliest reliable sign (C), and the decline is abrupt, not steadily proportional (D)."
  },
  {
    "id": 241,
    "chapter": 26,
    "domain": "Trauma and Thoracic Procedures",
    "question": "Tranexamic acid is given to an injured child to reduce death from bleeding. What is the critical timing requirement for its administration?",
    "options": {
      "A": "It should be withheld until twelve hours after the initial trauma",
      "B": "It is most effective when first given after six hours from injury",
      "C": "It may be started at any time during the hospital stay equally",
      "D": "It must be started within three hours of injury to confer benefit"
    },
    "answer": "D",
    "explanation": "TXA must be started within three hours of injury, because administration after that window confers no benefit and may increase harm. Giving it at six (B), twelve (D), or any arbitrary later time (C) misses the effective therapeutic window."
  },
  {
    "id": 242,
    "chapter": 26,
    "domain": "Trauma and Thoracic Procedures",
    "question": "The lethal triad accelerates hemorrhagic death in injured children. Which three components define it?",
    "options": {
      "A": "Hypoxia, hypercarbia, and hypoglycemia in a self-reinforcing cycle",
      "B": "Tachycardia, hypotension, and oliguria signaling decompensated shock",
      "C": "Hypothermia, acidosis, and coagulopathy, each deepening the other two",
      "D": "Hyperkalemia, hypocalcemia, and alkalosis from massive transfusion"
    },
    "answer": "C",
    "explanation": "The lethal triad is hypothermia, acidosis, and coagulopathy, each worsening the others. The other groupings (B, C, D) describe different physiologic derangements and are not the classic self-reinforcing lethal triad of trauma."
  },
  {
    "id": 243,
    "chapter": 26,
    "domain": "Trauma and Thoracic Procedures",
    "question": "Balanced resuscitation has replaced large crystalloid boluses in pediatric trauma. What is the recommended packed red cell transfusion volume per aliquot?",
    "options": {
      "A": "A fixed two-unit transfusion regardless of the child's weight",
      "B": "10 to 20 mL/kg, reassessing perfusion after each aliquot",
      "C": "40 to 60 mL/kg given as a single rapid bolus up front",
      "D": "1 to 2 mL/kg titrated slowly over several hours"
    },
    "answer": "B",
    "explanation": "Packed red cells are transfused at 10 to 20 mL/kg with reassessment after each aliquot. A 40 to 60 mL/kg bolus (B) is excessive, 1 to 2 mL/kg (C) is far too little, and fixed unit dosing ignoring weight (D) is inappropriate in children."
  },
  {
    "id": 244,
    "chapter": 27,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "A child has a teardrop-shaped pupil and a suspected globe rupture after trauma. What is the correct immediate management?",
    "options": {
      "A": "Apply a firm pressure patch over the eye to control any bleeding",
      "B": "Measure intraocular pressure with applanation tonometry urgently",
      "C": "Forcibly open the lids to fully inspect the anterior chamber depth",
      "D": "Stop the exam, shield the eye rigidly, and avoid raising intraocular pressure"
    },
    "answer": "D",
    "explanation": "A suspected globe rupture mandates stopping the exam, shielding with a rigid cover, and avoiding any maneuver that raises intraocular pressure. A pressure patch (B), tonometry (C), and forced lid opening (D) all raise pressure and can express intraocular contents."
  },
  {
    "id": 245,
    "chapter": 27,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "Fluorescein is instilled and the eye is examined under cobalt-blue light. A positive Seidel test indicates which finding?",
    "options": {
      "A": "A retained metallic foreign body lodged beneath the upper lid",
      "B": "A simple superficial corneal abrasion that will heal in two days",
      "C": "Traumatic iritis with cells and flare in the anterior chamber",
      "D": "A full-thickness corneal laceration with aqueous diluting the dye"
    },
    "answer": "D",
    "explanation": "A positive Seidel test, a stream of aqueous diluting the dye, indicates a full-thickness corneal laceration and globe rupture, mandating shielding and urgent consultation. It does not indicate a simple abrasion (B), iritis (C), or a foreign body (D)."
  },
  {
    "id": 246,
    "chapter": 27,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "A toddler sustains an alkali chemical eye burn from a detergent pod. What is the correct first action before history or visual acuity testing?",
    "options": {
      "A": "Obtain a detailed exposure history and document acuity before irrigating",
      "B": "Wait for ophthalmology to arrive before instilling any irrigation fluid",
      "C": "Apply a topical antibiotic ointment and patch the eye for transport",
      "D": "Begin copious irrigation immediately with a balanced salt solution or saline"
    },
    "answer": "D",
    "explanation": "A chemical burn takes priority even over acuity; irrigation begins immediately because every minute of contact deepens the alkali injury. Delaying to take a history (B), patching (C), or waiting for a consultant (D) allows progressive liquefactive necrosis."
  },
  {
    "id": 247,
    "chapter": 27,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "During irrigation of an alkali eye burn, the endpoint for stopping is determined by which measurement?",
    "options": {
      "A": "The inferior fornix pH normalizing to about 7.0 to 7.4 and staying stable",
      "B": "Resolution of the child's pain within the first five minutes of flushing",
      "C": "The conjunctiva turning white and blanched indicating good clearance",
      "D": "A fixed total of exactly 500 mL of saline regardless of pH readings"
    },
    "answer": "A",
    "explanation": "Irrigation continues until the inferior fornix pH normalizes to 7.0 to 7.4 and remains stable, which may need several liters. A fixed small volume (B) may be inadequate. A blanched white conjunctiva (C) signals limbal ischemia, and pain relief (D) is not the endpoint."
  },
  {
    "id": 248,
    "chapter": 27,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "A contact-lens-wearing adolescent has a corneal abrasion. Which topical antibiotic is preferred because of the heightened risk of Pseudomonas keratitis?",
    "options": {
      "A": "A fluoroquinolone such as ciprofloxacin or ofloxacin drops",
      "B": "A topical aminoglycoside such as gentamicin or tobramycin",
      "C": "A topical anesthetic prescribed for the child to use at home",
      "D": "Erythromycin ointment, which is sufficient for all abrasions"
    },
    "answer": "A",
    "explanation": "A fluoroquinolone is preferred for contact-lens wearers because of Pseudomonas risk. Erythromycin (B) suffices only for simple abrasions. Aminoglycosides (C) are toxic to regenerating epithelium, and anesthetic drops (D) are never dispensed for home use."
  },
  {
    "id": 249,
    "chapter": 27,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "A child has a grade II hyphema after blunt trauma. Which management step is correct?",
    "options": {
      "A": "Begin vigorous activity to promote rapid clearance of the blood",
      "B": "Rest with the head elevated 30 to 45 degrees and a rigid eye shield",
      "C": "Apply a soft pressure patch and discharge without pressure monitoring",
      "D": "Lie the child completely flat to keep the blood evenly dispersed"
    },
    "answer": "B",
    "explanation": "A hyphema is managed with rest, the head elevated 30 to 45 degrees so blood settles inferiorly, and a rigid shield, with daily pressure monitoring. Lying flat (B) disperses blood across the axis. A pressure patch (C) and activity (D) increase rebleeding risk."
  },
  {
    "id": 250,
    "chapter": 27,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "In a child with a hyphema, why must sickle-cell status be determined?",
    "options": {
      "A": "Sickled cells obstruct the trabecular meshwork even with a small hyphema",
      "B": "Sickled cells make the cornea opaque and obscure the slit-lamp view",
      "C": "Sickle-cell disease prevents any rebleeding and is entirely protective",
      "D": "Sickle status determines whether to reimplant an avulsed tooth fragment"
    },
    "answer": "A",
    "explanation": "Sickled erythrocytes obstruct the trabecular meshwork even with a small hyphema, and the optic nerve tolerates pressure elevation poorly, so carbonic anhydrase inhibitors are relatively contraindicated. Sickle status is not protective (B), tooth-related (C), or a corneal opacity issue (D)."
  },
  {
    "id": 251,
    "chapter": 27,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "A cooperative, well-anesthetized child has a firmly embedded corneal foreign body. What is the correct removal technique under slit-lamp magnification?",
    "options": {
      "A": "Approach tangentially bevel-up with a 25 to 27 gauge needle, flicking it away",
      "B": "Dig perpendicularly toward the anterior chamber to lift the object out",
      "C": "Drag a dry cotton swab firmly across the cornea to scrape it off",
      "D": "Use a metal curette to scoop deeply beneath the corneal stroma"
    },
    "answer": "A",
    "explanation": "A corneal foreign body is removed tangentially, bevel-up, with a 25 to 27 gauge needle, flicking it away from the visual axis. Digging toward the chamber (B) risks perforation. A dragging swab (C) enlarges the defect, and deep curette scooping (D) is too aggressive."
  },
  {
    "id": 252,
    "chapter": 27,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "An eyelid laceration is medial to the punctum. Why does this location require specialist repair?",
    "options": {
      "A": "It always indicates an occult globe rupture requiring enucleation",
      "B": "The medial lid has no blood supply and cannot heal if sutured",
      "C": "Medial lacerations involve the optic nerve sheath directly",
      "D": "It may transect the lacrimal canaliculus and cause lifelong epiphora"
    },
    "answer": "D",
    "explanation": "A laceration medial to the punctum may transect the lacrimal canaliculus, and repair over a silicone stent within 24 to 48 hours prevents lifelong epiphora. It does not mandate enucleation (B), lack blood supply (C), or involve the optic nerve sheath (D)."
  },
  {
    "id": 253,
    "chapter": 27,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "A child develops orbital compartment syndrome from a retrobulbar hemorrhage. Within what window does retinal ischemia become irreversible?",
    "options": {
      "A": "Approximately 6 to 8 hours, similar to limb compartment syndrome",
      "B": "Around 10 to 14 days, the same as the rebleeding window for hyphema",
      "C": "About 24 to 48 hours, allowing time to obtain a CT first",
      "D": "Roughly 90 to 120 minutes, making immediate decompression essential"
    },
    "answer": "D",
    "explanation": "Retinal ischemia becomes irreversible within roughly 90 to 120 minutes, so decompression cannot wait for imaging. The longer windows of 24 to 48 hours (B), 6 to 8 hours (C), and 10 to 14 days (D) all dangerously underestimate the urgency of this emergency."
  },
  {
    "id": 254,
    "chapter": 27,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "During a lateral canthotomy and cantholysis for orbital compartment syndrome, which step actually decompresses the orbit?",
    "options": {
      "A": "Compressing the globe firmly to express the retrobulbar blood",
      "B": "Strumming and cutting the inferior crus of the lateral canthal tendon",
      "C": "Suturing the upper and lower lids together to splint the globe",
      "D": "Making only the horizontal skin incision at the lateral canthus"
    },
    "answer": "B",
    "explanation": "Releasing the inferior crus of the canthal tendon loosens the lower lid sling and lets the globe move forward, relieving pressure. The skin incision alone (B) accomplishes nothing, suturing the lids (C) worsens it, and compressing the globe (D) is harmful."
  },
  {
    "id": 255,
    "chapter": 28,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "From which anatomic site does the majority of pediatric epistaxis originate?",
    "options": {
      "A": "The sphenopalatine artery deep in the posterior nasal cavity",
      "B": "The internal carotid artery within the cavernous sinus region",
      "C": "The cribriform plate at the roof of the nasal vault",
      "D": "Kiesselbach plexus in Little area on the anteroinferior septum"
    },
    "answer": "D",
    "explanation": "Most pediatric epistaxis arises from Kiesselbach plexus in Little area on the anteroinferior septum. The sphenopalatine artery (B) feeds the rarer posterior bleeds. The internal carotid (C) and cribriform plate (D) are not the usual sources of nosebleeds."
  },
  {
    "id": 256,
    "chapter": 28,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "A child has a nosebleed. Which initial maneuver is correct for controlling anterior epistaxis?",
    "options": {
      "A": "Pack both nostrils with gauze immediately before any pressure attempt",
      "B": "Lie supine and apply ice to the back of the neck while swallowing blood",
      "C": "Lean forward and pinch the soft cartilage continuously for 10 to 15 minutes",
      "D": "Tilt the head back and pinch the bony bridge for two minutes"
    },
    "answer": "C",
    "explanation": "The child leans forward and pinches the soft cartilaginous nose continuously for 10 to 15 minutes. Tilting back (B) lets blood be swallowed, lying supine (C) is wrong, and immediate bilateral packing (D) is reserved for failure of simpler measures."
  },
  {
    "id": 257,
    "chapter": 28,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "When applying silver nitrate cautery for a nasal bleed, why must bilateral simultaneous septal cautery be avoided?",
    "options": {
      "A": "It is far too painful for any child to tolerate at one sitting",
      "B": "It permanently stains the nasal mucosa a dark black color",
      "C": "It can devascularize the cartilage and cause a septal perforation",
      "D": "It causes immediate caloric vertigo and severe nausea"
    },
    "answer": "C",
    "explanation": "Cauterizing both sides of the septum at one sitting can devascularize the intervening cartilage and produce a septal perforation. The reason is devascularization, not pain (B), vertigo (C, which relates to ear irrigation), or cosmetic staining (D)."
  },
  {
    "id": 258,
    "chapter": 28,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "A recurrent unilateral epistaxis with progressive nasal obstruction occurs in an adolescent male. Which diagnosis deserves specific consideration?",
    "options": {
      "A": "Juvenile nasopharyngeal angiofibroma, referred for imaging rather than packing",
      "B": "A simple anterior Kiesselbach plexus bleed managed by cautery at the bedside",
      "C": "Allergic rhinitis treated with antihistamines and nasal saline alone",
      "D": "A button battery lodged anteriorly that requires immediate irrigation"
    },
    "answer": "A",
    "explanation": "Recurrent unilateral epistaxis with obstruction in an adolescent male suggests juvenile nasopharyngeal angiofibroma, a vascular tumor referred for imaging rather than instrumented at the bedside. A simple plexus bleed (B), battery (C), or allergic rhinitis (D) do not fit this pattern."
  },
  {
    "id": 259,
    "chapter": 28,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "Cerumen irrigation is planned for an impacted ear. In which situation is irrigation contraindicated?",
    "options": {
      "A": "When the child can sit still and cooperate fully with the procedure",
      "B": "When the tympanic membrane is perforated or a tympanostomy tube is present",
      "C": "When body-temperature water is the only fluid available for use",
      "D": "When the wax is soft and the canal is otherwise normal and intact"
    },
    "answer": "B",
    "explanation": "Irrigation is contraindicated with a perforated drum or a tympanostomy tube because fluid enters the middle ear. Soft wax in an intact canal (B), body-temperature water (C, which is actually preferred), and a cooperative child (D) are all favorable, not contraindications."
  },
  {
    "id": 260,
    "chapter": 28,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "A button battery is lodged in a child's nostril. Why does this constitute a surgical emergency measured in hours?",
    "options": {
      "A": "It releases mercury vapor that is rapidly absorbed systemically",
      "B": "It swells with nasal moisture and mechanically obstructs the airway",
      "C": "It generates hydroxide ions causing liquefactive necrosis within two hours",
      "D": "It triggers an allergic reaction that closes the nasal passages"
    },
    "answer": "C",
    "explanation": "Contact with moist mucosa completes a circuit, generating hydroxide ions and an alkaline burn with liquefactive necrosis beginning within two hours, threatening septal perforation. The hazard is electrochemical, not swelling (B), mercury vapor (C), or allergy (D)."
  },
  {
    "id": 261,
    "chapter": 28,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "An anterior nasal foreign body needs removal in a cooperative child. Which atraumatic technique is described as the parent's kiss?",
    "options": {
      "A": "Irrigate the affected nostril with copious warm saline under pressure",
      "B": "Push the object posteriorly into the nasopharynx for it to be swallowed",
      "C": "Occlude the clear nostril and have the parent puff air into the child's mouth",
      "D": "Grasp the object blindly with forceps without any decongestion first"
    },
    "answer": "C",
    "explanation": "The positive-pressure parent's kiss occludes the unaffected nostril while the parent puffs air into the mouth, expelling the object. Irrigation (B) risks aspiration, pushing it posteriorly (C) risks aspiration, and blind forceps without decongestion (D) is traumatic."
  },
  {
    "id": 262,
    "chapter": 28,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "A 9-year-old avulses a maxillary central incisor in a fall. What is the correct immediate management of this permanent tooth?",
    "options": {
      "A": "Discard the tooth because permanent incisors cannot be successfully saved",
      "B": "Scrub the root clean and store the tooth dry in gauze for the dentist",
      "C": "Place the tooth in tap water and refer for routine dental follow-up",
      "D": "Handle by the crown, rinse gently, and reimplant into the socket immediately"
    },
    "answer": "D",
    "explanation": "An avulsed permanent tooth is handled by the crown, rinsed gently, and reimplanted immediately, since periodontal ligament cells die within minutes. Scrubbing the root and dry storage (B), tap water (C, hypotonic and lyses cells), and discarding (D) are all wrong."
  },
  {
    "id": 263,
    "chapter": 28,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "If immediate reimplantation of an avulsed permanent tooth is not possible, which is the best transport medium?",
    "options": {
      "A": "Hank balanced salt solution, cold milk, or the child's own saliva",
      "B": "Hydrogen peroxide to disinfect the root surface during transport",
      "C": "Plain tap water, which keeps the ligament cells hydrated",
      "D": "Dry sterile gauze that protects the root from contamination"
    },
    "answer": "A",
    "explanation": "The tooth is transported in Hank solution, cold milk, or saliva, which preserve ligament cells. Tap water (B) is hypotonic and lyses the cells, dry gauze (C) desiccates them, and hydrogen peroxide (D) is toxic to the periodontal ligament."
  },
  {
    "id": 264,
    "chapter": 28,
    "domain": "ENT, Ophthalmologic, and Dental Procedures",
    "question": "An Ellis class III crown fracture is identified in a child. Which structure is exposed, and what does it require?",
    "options": {
      "A": "Only enamel is involved, requiring no treatment beyond cosmetic smoothing",
      "B": "The pulp is exposed, appearing pink or bleeding, needing urgent dental care",
      "C": "The dentin is exposed and is simply covered with a protective dressing",
      "D": "The periodontal ligament is torn, requiring a flexible splint for two weeks"
    },
    "answer": "B",
    "explanation": "An Ellis III fracture exposes the pulp, appearing pink or bleeding, and requires urgent dental evaluation to prevent infection and pulp necrosis. Enamel only is Ellis I (B), dentin exposure is Ellis II (C), and ligament injury (D) describes luxation, not a crown fracture."
  },
  {
    "id": 265,
    "chapter": 29,
    "domain": "Gastrointestinal and Genitourinary Procedures",
    "question": "A clinician must place a gastric tube in a 2-week-old neonate. Why is the orogastric route preferred over nasogastric in this age group?",
    "options": {
      "A": "Nasogastric tubes cannot reach the stomach in infants under one month",
      "B": "The orogastric route allows a much larger caliber tube than the nasal route",
      "C": "The oral route is the only way to confirm placement by aspiration",
      "D": "Neonates are obligate nasal breathers and a nasal tube can cause distress"
    },
    "answer": "D",
    "explanation": "Neonates are obligate nasal breathers, so an NG tube occupies a meaningful fraction of the nasal airway and can precipitate respiratory distress; the OG route is preferred. The choice is not about caliber (B), reach (C), or confirmation method (D)."
  },
  {
    "id": 266,
    "chapter": 29,
    "domain": "Gastrointestinal and Genitourinary Procedures",
    "question": "A trauma patient has suspected basilar skull fracture with midface injury. Which gastric tube route is mandated, and why?",
    "options": {
      "A": "The nasogastric route, because the oral route risks aspiration of blood",
      "B": "Neither route, because gastric decompression is contraindicated in trauma",
      "C": "The orogastric route, because a nasal tube can pass intracranially through a defect",
      "D": "Either route is acceptable since the cribriform plate is well protected"
    },
    "answer": "C",
    "explanation": "With suspected basal skull fracture or midface trauma, the OG route is mandated because a nasal tube can pass intracranially through a cribriform plate defect. The NG route (B) carries that intracranial risk, the plate is not protected (C), and decompression is indicated (D)."
  },
  {
    "id": 267,
    "chapter": 29,
    "domain": "Gastrointestinal and Genitourinary Procedures",
    "question": "To estimate insertion depth before placing a gastric tube, the NEX measurement is used. What does it measure?",
    "options": {
      "A": "Nostril to the carina as seen on the confirmatory chest film",
      "B": "Nasal tip to the angle of the mandible to the sternal notch",
      "C": "Nose to earlobe to a point midway between the xiphoid and umbilicus",
      "D": "Neck to epigastrium to the xiphoid process in a straight line"
    },
    "answer": "C",
    "explanation": "The NEX measurement runs from the nose to the earlobe to a point midway between the xiphoid and umbilicus, marked with tape. The other described paths (B, C, D) are not the standard NEX landmarks for estimating gastric tube insertion depth."
  },
  {
    "id": 268,
    "chapter": 29,
    "domain": "Gastrointestinal and Genitourinary Procedures",
    "question": "After placing a nasogastric tube, which method is the accepted bedside standard for confirming gastric position?",
    "options": {
      "A": "Observing the child tolerate a small test feed without coughing",
      "B": "Aspirating gastric contents and testing for a pH of 5.5 or less",
      "C": "Feeling warm air exit the tube hub during a deep exhalation",
      "D": "Auscultating an air bolus whoosh over the epigastric region"
    },
    "answer": "B",
    "explanation": "The bedside standard is aspirating gastric contents and testing a pH of 5.5 or less. Auscultation of an air whoosh (B) is unreliable and no longer accepted. A test feed (C) is unsafe before confirmation, and feeling exhaled air (D) is not a valid check."
  },
  {
    "id": 269,
    "chapter": 29,
    "domain": "Gastrointestinal and Genitourinary Procedures",
    "question": "A child's mature gastrostomy tube falls out. Why is prompt replacement of a tube in a tract older than six to eight weeks important?",
    "options": {
      "A": "The balloon must be inflated with air rather than water once mature",
      "B": "The tract begins contracting within hours and can close within four to six hours",
      "C": "A mature tract will perforate the peritoneum if any tube is reinserted",
      "D": "Mature tracts require surgical revision and never accept a bedside tube"
    },
    "answer": "B",
    "explanation": "A mature tract contracts within hours and can close substantially within four to six hours, after which blind replacement becomes difficult, so prompt replacement is the priority. Perforation risk (B) applies to immature tracts, mature tracts accept bedside tubes (C), and balloons use water, not air (D)."
  },
  {
    "id": 270,
    "chapter": 29,
    "domain": "Gastrointestinal and Genitourinary Procedures",
    "question": "A gastrostomy tube dislodges from a tract that is only two weeks old. What is the correct action?",
    "options": {
      "A": "Inflate a Foley balloon deep within the tract and begin feeds at once",
      "B": "Reassure the family and schedule routine outpatient replacement next week",
      "C": "Immediately force a same-size tube through the immature tract",
      "D": "Avoid blind reinsertion and obtain urgent surgical or gastroenterology involvement"
    },
    "answer": "D",
    "explanation": "An immature tract under four weeks old should not be blindly reinserted because a false passage into the peritoneum is easily created; urgent surgical or GI involvement is warranted. Forcing a tube (B), blind deep Foley placement with feeds (C), and delayed routine follow-up (D) are all unsafe."
  },
  {
    "id": 271,
    "chapter": 29,
    "domain": "Gastrointestinal and Genitourinary Procedures",
    "question": "A toddler swallows a button battery that lodges in the esophagus. Why is endoscopic removal required without delay?",
    "options": {
      "A": "It will pass spontaneously within hours and needs only stool checks",
      "B": "It safely dissolves in gastric acid once it reaches the stomach",
      "C": "It is radiolucent and cannot be located without a contrast study first",
      "D": "It causes full-thickness necrosis within two hours and risks fistula formation"
    },
    "answer": "D",
    "explanation": "An esophageal button battery generates a hydroxide current causing full-thickness necrosis within two hours, with catastrophic complications such as tracheoesophageal fistula, demanding emergent endoscopic removal. It does not pass safely (B), is radiopaque with a halo sign (C), and does not dissolve harmlessly (D)."
  },
  {
    "id": 272,
    "chapter": 29,
    "domain": "Gastrointestinal and Genitourinary Procedures",
    "question": "On a radiograph, which feature distinguishes an esophageal button battery from an ingested coin?",
    "options": {
      "A": "A perfectly smooth single circle identical in appearance to a coin",
      "B": "An edge-on linear orientation seen only on the AP projection",
      "C": "A radiolucent shadow that is invisible on plain radiographs",
      "D": "A double-ring or halo sign on the AP view with a lateral step-off"
    },
    "answer": "D",
    "explanation": "A button battery shows a double-ring or halo sign on the AP view and a step-off on the lateral, distinguishing it from a coin. A coin is a single smooth circle (B). The edge-on appearance (C) suggests a tracheal object, and batteries are radiopaque (D)."
  },
  {
    "id": 273,
    "chapter": 29,
    "domain": "Gastrointestinal and Genitourinary Procedures",
    "question": "A child ingests two small magnets. Why does this require urgent attention compared with a single magnet?",
    "options": {
      "A": "The magnets attract across bowel loops, trapping tissue and causing necrosis",
      "B": "Paired magnets release toxic metals absorbed through the intestinal wall",
      "C": "Two magnets are too large to pass and always cause immediate obstruction",
      "D": "A single magnet is dangerous while two magnets pass harmlessly together"
    },
    "answer": "A",
    "explanation": "Two or more magnets attract across intervening bowel walls, trapping tissue and producing pressure necrosis, fistula, and perforation. A single magnet behaves like an ordinary blunt object (D is reversed). The hazard is the attraction, not size alone (B) or metal toxicity (C)."
  },
  {
    "id": 274,
    "chapter": 30,
    "domain": "Gastrointestinal and Genitourinary Procedures",
    "question": "A febrile 3-month-old needs an uncontaminated urine specimen. Why is transurethral catheterization preferred over a bag specimen?",
    "options": {
      "A": "Catheterization is the only way to measure the bladder volume present",
      "B": "Bag specimens carry unacceptably high contamination rates for diagnosis",
      "C": "Bag collection requires sedation that catheterization avoids entirely",
      "D": "Bag specimens cannot be obtained in infants younger than six months"
    },
    "answer": "B",
    "explanation": "Catheterization is preferred because bag specimens carry unacceptable contamination rates, making them unreliable for diagnosing UTI. The reason is not an age limit (B), volume measurement (C), or sedation needs (D); it is specimen reliability."
  },
  {
    "id": 275,
    "chapter": 30,
    "domain": "Gastrointestinal and Genitourinary Procedures",
    "question": "While catheterizing an uncircumcised infant boy, the foreskin is retracted to expose the meatus. What must always be done after the procedure?",
    "options": {
      "A": "Forcibly retract the foreskin further to break preputial adhesions",
      "B": "Reduce the retracted foreskin to its normal position to prevent paraphimosis",
      "C": "Apply a constricting band at the corona to hold the catheter in place",
      "D": "Leave the foreskin fully retracted to keep the meatus easily visible"
    },
    "answer": "B",
    "explanation": "The retracted foreskin must always be reduced after the procedure to prevent paraphimosis. Leaving it retracted (B) is the most common cause of iatrogenic paraphimosis. Forced retraction (C) tears adhesions, and a constricting band (D) would cause the very entrapment to be avoided."
  },
  {
    "id": 276,
    "chapter": 30,
    "domain": "Gastrointestinal and Genitourinary Procedures",
    "question": "Suprapubic aspiration is anatomically feasible in young infants but not older children. What anatomic fact explains this?",
    "options": {
      "A": "The infant bladder is an abdominal organ rising above the pubic symphysis when full",
      "B": "Infants have a thicker abdominal wall that anchors the needle firmly",
      "C": "The infant bladder lies deep within the bony pelvis behind the symphysis",
      "D": "The older child's bladder ascends higher with age above the umbilicus"
    },
    "answer": "A",
    "explanation": "In young infants the full bladder is an abdominal organ rising above the pubic symphysis, within reach of a needle. As the child grows the bladder descends into the bony pelvis (B describes the older child). The wall is not thicker (C), and the bladder descends, not ascends, with age (D)."
  },
  {
    "id": 277,
    "chapter": 30,
    "domain": "Gastrointestinal and Genitourinary Procedures",
    "question": "During suprapubic aspiration of an infant bladder, where is the needle inserted?",
    "options": {
      "A": "1 to 2 cm above the pubic symphysis in the midline, perpendicular to the skin",
      "B": "Just below the symphysis directed cephalad into the lower abdomen",
      "C": "5 cm lateral to the symphysis aimed toward the iliac crest",
      "D": "At the level of the umbilicus angled steeply toward the pelvis"
    },
    "answer": "A",
    "explanation": "The puncture site is 1 to 2 cm above the pubic symphysis in the midline, with the needle perpendicular or slightly caudad, ideally under ultrasound guidance. The lateral (B), umbilical (C), and sub-symphyseal (D) approaches do not target the distended infant bladder safely."
  },
  {
    "id": 278,
    "chapter": 30,
    "domain": "Gastrointestinal and Genitourinary Procedures",
    "question": "Paraphimosis is diagnosed in an uncircumcised boy. Which first step makes manual reduction possible?",
    "options": {
      "A": "Pushing the glans backward forcefully without addressing the swelling",
      "B": "Applying a tight constricting band proximal to the entrapped foreskin",
      "C": "Reducing glanular edema with sustained compression or osmotic agents",
      "D": "Immediately performing a dorsal slit before attempting any compression"
    },
    "answer": "C",
    "explanation": "Success hinges on first reducing glanular edema with several minutes of steady compression, ice, or osmotic agents such as sugar or dextrose-soaked gauze. A dorsal slit (B) is reserved for failure, a forceful push (C) worsens edema, and a constricting band (D) is harmful."
  },
  {
    "id": 279,
    "chapter": 30,
    "domain": "Gastrointestinal and Genitourinary Procedures",
    "question": "A dorsal penile nerve block is used to facilitate paraphimosis reduction. Which agent characteristic is essential?",
    "options": {
      "A": "Bupivacaine with epinephrine to reduce systemic absorption from the block",
      "B": "A topical anesthetic only, since nerve blocks are never used on the penis",
      "C": "Plain lidocaine without epinephrine, which is contraindicated in penile circulation",
      "D": "Lidocaine combined with epinephrine to prolong the anesthetic duration"
    },
    "answer": "C",
    "explanation": "A dorsal penile nerve block uses plain lidocaine without epinephrine, because epinephrine is contraindicated in the digital and penile circulation. Any epinephrine-containing agent (B, D) risks ischemia, and a nerve block is appropriate, not forbidden (C), for this procedure."
  },
  {
    "id": 280,
    "chapter": 30,
    "domain": "Gastrointestinal and Genitourinary Procedures",
    "question": "A child has an incarcerated inguinal hernia. Which findings instead indicate strangulation, making reduction contraindicated?",
    "options": {
      "A": "A soft nontender mass that transilluminates and reduces with gentle pressure",
      "B": "A painless reducible bulge that disappears when the child lies down",
      "C": "Tense tender swelling with skin erythema, bilious vomiting, and systemic toxicity",
      "D": "A fluctuating groin swelling that changes in size throughout the day"
    },
    "answer": "C",
    "explanation": "Tense tender swelling, skin erythema, bilious vomiting, and toxicity point to strangulation, for which reduction is contraindicated and immediate operation is required. A transilluminating mass (B) is a hydrocele, a fluctuating mass (C) is a communicating hydrocele, and a reducible bulge (D) is benign."
  },
  {
    "id": 281,
    "chapter": 30,
    "domain": "Gastrointestinal and Genitourinary Procedures",
    "question": "An incarcerated but viable inguinal hernia is reduced. Which positioning and technique are correct?",
    "options": {
      "A": "Sit the child upright and give one forceful rapid shove straight downward",
      "B": "Place supine in Trendelenburg and apply gentle sustained pressure along the canal",
      "C": "Place prone with the legs extended and squeeze the distal sac quickly",
      "D": "Reduce without analgesia so the child's straining helps push contents back"
    },
    "answer": "B",
    "explanation": "The child is placed supine in Trendelenburg, and gentle sustained pressure directs the contents back through the canal over minutes. A forceful shove (B), prone positioning with quick squeezing (C), and omitting analgesia so the child strains (D) all work against successful, safe reduction."
  },
  {
    "id": 282,
    "chapter": 30,
    "domain": "Gastrointestinal and Genitourinary Procedures",
    "question": "Why must inguinal hernia reduction in a child never be forced with excessive pressure?",
    "options": {
      "A": "Excessive force causes the hernia sac to permanently seal shut and obstruct",
      "B": "Forced reduction stretches the spermatic cord and causes testicular torsion",
      "C": "Forceful reduction always converts a hydrocele into a strangulated hernia",
      "D": "Excessive force can reduce dead or perforated bowel into the peritoneum"
    },
    "answer": "D",
    "explanation": "Excessive pressure can reduce dead or perforated bowel into the peritoneum (reduction en masse) with catastrophic results. It does not seal the sac (B), convert a hydrocele (C), or cause torsion (D); the danger is returning nonviable bowel to the abdomen."
  },
  {
    "id": 283,
    "chapter": 31,
    "domain": "Neurologic Procedures",
    "question": "In a neonate, the conus medullaris sits lower than in older children. Which interspaces are therefore safest for lumbar puncture in infants?",
    "options": {
      "A": "L2 to L3 and L3 to L4, at the level of the neonatal conus",
      "B": "T12 to L1, just below the costal margin landmark",
      "C": "L4 to L5 and L5 to S1, which lie below the neonatal conus",
      "D": "L1 to L2 and L2 to L3, the standard adult interspaces"
    },
    "answer": "C",
    "explanation": "The neonatal conus sits near L3, so infant LPs use the lower L4 to L5 or L5 to S1 interspaces to stay below the cord. The L1 to L2 (B) and T12 to L1 (C) levels are too high, and L2 to L3 or L3 to L4 (D) risk the neonatal conus."
  },
  {
    "id": 284,
    "chapter": 31,
    "domain": "Neurologic Procedures",
    "question": "The intercristal (Tuffier) line is used as a landmark for lumbar puncture. Which spinal level does it approximately cross?",
    "options": {
      "A": "The S2 level at the posterior superior iliac spines",
      "B": "The L4 spinous process or the L4 to L5 interspace",
      "C": "The L1 to L2 interspace at the adult conus medullaris",
      "D": "The T12 vertebral body near the lowest rib insertion"
    },
    "answer": "B",
    "explanation": "The intercristal line, drawn between the iliac crest tops, crosses the spine at about the L4 spinous process or L4 to L5 interspace. It does not mark T12 (B), S2 (C), or the L1 to L2 level (D), which lie above or below this reliable landmark."
  },
  {
    "id": 285,
    "chapter": 31,
    "domain": "Neurologic Procedures",
    "question": "Which finding is a contraindication to lumbar puncture that mandates neuroimaging first because of herniation risk?",
    "options": {
      "A": "A normal level of consciousness with mild neck stiffness on flexion",
      "B": "Focal neurologic deficits, posturing, or abnormal pupils with the Cushing triad",
      "C": "A fever with nonspecific irritability in a young infant without deficits",
      "D": "An isolated bulging fontanelle in an otherwise stable, well-appearing infant"
    },
    "answer": "B",
    "explanation": "Focal deficits, posturing, abnormal pupils, and the Cushing triad signal a pressure gradient and mandate imaging before LP. An isolated bulging fontanelle in a stable infant (B) is not a contraindication, and febrile irritability (C) or mild stiffness (D) are indications, not contraindications."
  },
  {
    "id": 286,
    "chapter": 31,
    "domain": "Neurologic Procedures",
    "question": "A valid opening pressure must be measured during lumbar puncture. Which positioning and value are correct for a child?",
    "options": {
      "A": "Any position is acceptable, and crying does not affect the reading",
      "B": "Prone with legs extended, normal pressure exceeding 40 cm H2O",
      "C": "Sitting upright and flexed, with normal pressure below 5 cm H2O",
      "D": "Lateral recumbent with the child calm, normal pressure about 10 to 28 cm H2O"
    },
    "answer": "D",
    "explanation": "A valid opening pressure requires the lateral recumbent position with the child calm; normal pediatric pressure is about 10 to 28 cm H2O. The sitting position (B) gives no valid pressure, the prone description (C) is wrong, and crying and tight flexion falsely elevate readings (D)."
  },
  {
    "id": 287,
    "chapter": 31,
    "domain": "Neurologic Procedures",
    "question": "Which needle choice reduces post-dural-puncture headache and is increasingly preferred in children old enough to report headache?",
    "options": {
      "A": "A long 2.5-inch needle used routinely in neonates for better control",
      "B": "A large-bore cutting Quincke needle that maximizes rapid fluid return",
      "C": "An atraumatic pencil-point needle that spreads rather than cuts dural fibers",
      "D": "A 27-gauge cutting needle without any stylet for the smallest infants"
    },
    "answer": "C",
    "explanation": "Atraumatic pencil-point needles spread rather than cut the dural fibers, reducing post-dural-puncture headache, and are preferred in children who can report headache. A large cutting needle (B) increases headache, a 27-gauge without stylet (C) is wrong, and a long needle in neonates (D) is harder to control."
  },
  {
    "id": 288,
    "chapter": 31,
    "domain": "Neurologic Procedures",
    "question": "While performing an LP, in which direction should the needle be aimed as it is advanced in the midline?",
    "options": {
      "A": "Slightly cephalad, toward the umbilicus, advancing slowly in small increments",
      "B": "Laterally toward the lamina to find the epidural venous plexus",
      "C": "Directly perpendicular with no cephalad angle and without a stylet",
      "D": "Steeply caudad, away from the head, in one rapid continuous push"
    },
    "answer": "A",
    "explanation": "The needle is aimed slightly cephalad toward the umbilicus and advanced slowly in small increments with frequent stylet checks. A caudad rapid push (B) is wrong, lateral drift toward the lamina (C) causes traumatic taps, and the stylet should be in place during insertion (D)."
  },
  {
    "id": 289,
    "chapter": 31,
    "domain": "Neurologic Procedures",
    "question": "A child with a ventriculoperitoneal shunt presents with headache, vomiting, and lethargy. When is an emergent shunt tap most clearly indicated?",
    "options": {
      "A": "Obstruction with critically raised pressure and signs of impending herniation",
      "B": "A child whose recent imaging shows unchanged ventricular size",
      "C": "Any child with a shunt and a low-grade fever as a screening test",
      "D": "A well-appearing child with a vague headache and stable head size"
    },
    "answer": "A",
    "explanation": "In obstruction with critically raised pressure and impending herniation, draining reservoir fluid is a lifesaving emergency maneuver. A well-appearing child (B) and stable imaging (D) warrant consultation, not an immediate tap, and the tap is not a screening test (C) because it can seed infection."
  },
  {
    "id": 290,
    "chapter": 31,
    "domain": "Neurologic Procedures",
    "question": "During a shunt tap, no cerebrospinal fluid returns from the reservoir. What does this finding most likely indicate?",
    "options": {
      "A": "Normal shunt function requiring no further neurosurgical evaluation",
      "B": "Proximal ventricular catheter obstruction, which is itself diagnostic",
      "C": "Distal obstruction with markedly elevated drainage pressure",
      "D": "An overdrained ventricle that should be refilled with saline"
    },
    "answer": "B",
    "explanation": "Inability to obtain fluid points to proximal (ventricular catheter) obstruction and is itself diagnostic; forcing aspiration only draws tissue into the catheter. Easy high-pressure flow indicates distal obstruction (B). The finding is abnormal, not normal (C), and saline is not injected (D)."
  },
  {
    "id": 291,
    "chapter": 31,
    "domain": "Neurologic Procedures",
    "question": "When draining cerebrospinal fluid during a shunt tap for raised pressure, which technique is correct?",
    "options": {
      "A": "Inject saline into the reservoir to flush the obstructed catheter clear",
      "B": "Drain continuously until the fontanelle becomes deeply sunken",
      "C": "Aspirate forcefully and rapidly to empty the entire ventricular system",
      "D": "Allow fluid to drain by gravity, removing only the volume needed to lower pressure"
    },
    "answer": "D",
    "explanation": "Fluid is allowed to drain by gravity, removing only enough to lower pressure into a safer range while watching the neurologic status. Forceful aspiration (B) can collapse the ventricle, injecting saline (C) is wrong, and over-draining to a sunken fontanelle (D) is hazardous."
  },
  {
    "id": 292,
    "chapter": 32,
    "domain": "Point-of-Care Ultrasound-Guided Procedures",
    "question": "Which transducer best resolves the shallow structures of children for vascular access, soft tissue, and nerve blocks?",
    "options": {
      "A": "A low-frequency curvilinear probe of about 2 to 5 MHz",
      "B": "An endocavitary probe designed for transvaginal imaging",
      "C": "A phased-array probe optimized for deep cardiac windows",
      "D": "A high-frequency linear transducer of roughly 7 to 15 MHz"
    },
    "answer": "D",
    "explanation": "A high-frequency linear transducer (7 to 15 MHz) resolves shallow structures and serves most pediatric procedural applications. The curvilinear (B) and phased-array (C) probes penetrate deeper for FAST windows, and an endocavitary probe (D) is for cavity imaging, not these procedures."
  },
  {
    "id": 293,
    "chapter": 32,
    "domain": "Point-of-Care Ultrasound-Guided Procedures",
    "question": "In the out-of-plane (transverse) approach to ultrasound-guided vascular access, how does the target vessel and needle appear?",
    "options": {
      "A": "The needle is invisible and only the tissue planes are seen on screen",
      "B": "The full needle shaft and tip are visible as a continuous bright line",
      "C": "The vessel is a circle in cross-section and the needle crosses as a bright dot",
      "D": "The vessel appears as a long tube with the needle alongside its length"
    },
    "answer": "C",
    "explanation": "In the out-of-plane approach the vessel is seen in cross-section as a circle and the needle crosses the beam as a bright dot, requiring the operator to walk down the beam. The full-shaft line (B) and longitudinal tube (C) describe the in-plane view, and the needle is not invisible (D)."
  },
  {
    "id": 294,
    "chapter": 32,
    "domain": "Point-of-Care Ultrasound-Guided Procedures",
    "question": "Why is dynamic (real-time) guidance strongly preferred over the static mark-and-stick technique for central venous access?",
    "options": {
      "A": "It marks the vessel location and then permits a faster blind stick",
      "B": "It requires no probe orientation check before the procedure begins",
      "C": "It eliminates the need to distinguish vein from artery beforehand",
      "D": "It watches the needle enter the lumen and avoids posterior-wall and arterial puncture"
    },
    "answer": "D",
    "explanation": "Dynamic guidance watches the needle enter the lumen in real time, confirming intraluminal placement and avoiding the posterior wall and adjacent artery. The static method marks then sticks blindly (C). Orientation checks (B) and vein-artery distinction (D) remain necessary regardless."
  },
  {
    "id": 295,
    "chapter": 32,
    "domain": "Point-of-Care Ultrasound-Guided Procedures",
    "question": "When distinguishing a vein from an artery under ultrasound for central access, which feature characterizes the vein?",
    "options": {
      "A": "Always larger than the adjacent artery and pulsating vigorously",
      "B": "Round, pulsatile, and resistant to compression with the probe",
      "C": "Thin-walled and compressible, collapsing readily under gentle probe pressure",
      "D": "Thick-walled with a bright echogenic ring that never collapses"
    },
    "answer": "C",
    "explanation": "The vein is thin-walled and compressible, collapsing under gentle pressure, whereas the artery is round, pulsatile, and resists compression (B). The thick non-collapsing description (C) fits an artery, and veins are not defined by being larger or pulsatile (D)."
  },
  {
    "id": 296,
    "chapter": 32,
    "domain": "Point-of-Care Ultrasound-Guided Procedures",
    "question": "A child has blunt abdominal trauma with a negative FAST examination. Which statement correctly interprets this result?",
    "options": {
      "A": "A negative FAST reliably clears the abdomen and obviates any further imaging",
      "B": "A negative FAST never excludes injury, since solid-organ trauma often lacks free fluid",
      "C": "A small amount of pelvic free fluid on FAST is always pathologic in children",
      "D": "A negative FAST mandates immediate laparotomy to confirm the absence of injury"
    },
    "answer": "B",
    "explanation": "A negative FAST never excludes significant pediatric injury because solid-organ trauma frequently occurs without detectable free fluid, so CT or observation is still needed. It does not clear the abdomen (B) or mandate laparotomy (C), and small pelvic fluid can be physiologic (D)."
  },
  {
    "id": 297,
    "chapter": 32,
    "domain": "Point-of-Care Ultrasound-Guided Procedures",
    "question": "Which sonographic finding distinguishes a drainable abscess from cellulitis on soft-tissue ultrasound?",
    "options": {
      "A": "A cobblestone pattern of edematous fat with bright septa throughout",
      "B": "A discrete fluid collection with a squish sign of mobile internal contents",
      "C": "Bright echogenic foci with posterior shadowing scattered in the fat",
      "D": "Uniform hyperechoic tissue with no fluid and brisk color Doppler flow"
    },
    "answer": "B",
    "explanation": "An abscess appears as a discrete fluid collection, often hypoechoic, with a squish sign of mobile contents on compression. The cobblestone pattern (B) is cellulitis, uniform tissue without fluid (C) is not an abscess, and echogenic foci with shadowing (D) suggest foreign bodies."
  },
  {
    "id": 298,
    "chapter": 32,
    "domain": "Point-of-Care Ultrasound-Guided Procedures",
    "question": "Before incising a presumed abscess, why must color Doppler be applied to the lesion?",
    "options": {
      "A": "Doppler measures the exact depth needed for the incision and drainage",
      "B": "A pulsatile vessel may be a pseudoaneurysm or malformation that must not be cut",
      "C": "Doppler sterilizes the field and reduces the risk of seeding infection",
      "D": "Color Doppler confirms the collection is purely cellulitis before draining"
    },
    "answer": "B",
    "explanation": "Color Doppler is applied because a pulsatile vessel within or beside the lesion may be a pseudoaneurysm or vascular malformation, and incising it would be disastrous. Doppler does not confirm cellulitis (B), measure incision depth (C), or sterilize the field (D)."
  },
  {
    "id": 299,
    "chapter": 32,
    "domain": "Point-of-Care Ultrasound-Guided Procedures",
    "question": "During an ultrasound-guided nerve block in a 15 kg child, which maximum dose and antidote preparation are correct?",
    "options": {
      "A": "Lidocaine about 15 mg/kg with no antidote needed for small children",
      "B": "Unlimited dosing by volume since fascial planes require large amounts",
      "C": "Bupivacaine about 10 mg/kg with naloxone ready to reverse toxicity",
      "D": "Lidocaine about 4.5 mg/kg with intravenous lipid emulsion available for LAST"
    },
    "answer": "D",
    "explanation": "Lidocaine is limited to roughly 4.5 mg/kg (about 7 with epinephrine), and intravenous lipid emulsion 20%, the antidote for LAST, must be available. A 15 mg/kg lidocaine dose (B) and 10 mg/kg bupivacaine (C) are toxic, naloxone does not treat LAST, and dosing is never unlimited (D)."
  },
  {
    "id": 300,
    "chapter": 32,
    "domain": "Point-of-Care Ultrasound-Guided Procedures",
    "question": "When using a high-frequency linear probe on a small child's thin-walled vein, why must the operator maintain minimal probe pressure?",
    "options": {
      "A": "Firm pressure is required to keep the needle tip continuously in the beam",
      "B": "Excess pressure collapses the thin-walled vein and hides the target on screen",
      "C": "Excess pressure improves vein visualization by flattening the surrounding tissue",
      "D": "Light pressure is needed only for arterial cannulation, not for venous access"
    },
    "answer": "B",
    "explanation": "In small children the vein collapses under modest probe pressure, hiding the target, so a light touch preserves the lumen. Excess pressure does not improve venous targeting (B), the rule applies to veins (C), and firm pressure is not needed for tip tracking (D)."
  }
];