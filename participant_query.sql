SELECT 
	ct.id, 
	"SUB Hit" / (coalesce("SUB Hit",0) + coalesce("SUB Miss",0) + coalesce("SB Hit",0) + coalesce("SB Miss",0))::decimal AS "Synergy Hit Rate",
	"SB False Alarm" / (coalesce("SB False Alarm",0) + coalesce("SB Correct Rejection",0))::decimal AS "Synergy False Alarm Rate",
	"NSUB Hit" / (coalesce("NSUB Hit",0) + coalesce("NSUB Miss",0) + coalesce("NSB Hit",0) + coalesce("NSB Miss",0))::decimal AS "Non Synergy Hit Rate",
	"NSB False Alarm" / (coalesce("NSB False Alarm",0) + coalesce("NSB Correct Rejection",0))::decimal AS "Non Synergy False Alarm Rate",
	"NSB Hit", 
	"NSB Miss", 
	"NSB False Alarm", 
	"NSB Correct Rejection", 
	"NSUB Hit", 
	"NSUB Miss", 
	"NSUB False Alarm", 
	"NSUB Correct Rejection", 
	"SB Hit", 
	"SB Miss", 
	"SB False Alarm", 
	"SB Correct Rejection", 
	"SUB Hit", 
	"SUB Miss", 
	"SUB False Alarm", 
	"SUB Correct Rejection",
	1 AS "Manipulation Check 1",
	(mc1.answer != mc2.answer)::integer AS "Manipulation Check 2",
	"Smart Predictor transparent" AS "SP_Cred1",
	"Smart Predictor credible" AS "SP_Cred2",
	"Smart Predictor fair" AS "SP_Cred3",
	"Smart Predictor competent" AS "SP_Cred4",
	"Smart Predictor expert" AS "SP_Cred5",
	"Smart Predictor benevolent" AS "SP_Cred6",
	"Smart Predictor trustworthy" AS "SP_Cred7",
	"Smart Predictor unbiased" AS "SP_Cred8",
	"CS Predictor transparent" AS "CS_Cred1",
	"CS Predictor credible" AS "CS_Cred2",
	"CS Predictor fair" AS "CS_Cred3",
	"CS Predictor competent" AS "CS_Cred4",
	"CS Predictor expert" AS "CS_Cred5",
	"CS Predictor benevolent" AS "CS_Cred6",
	"CS Predictor trustworthy" AS "CS_Cred7",
	"CS Predictor unbiased" AS "CS_Cred8",
	"Smart Predictor understand" AS "SP_Fam1",
	"Smart Predictor comfort" AS "SP_Fam2", 
	"Smart Predictor confident" AS "SP_Fam3",
	"CS Predictor understand" AS "CS_Fam1",
	"CS Predictor comfort" AS "CS_Fam2",
	"CS Predictor confident" AS "CS_Fam3",
	"Smart Predictor reflect" AS "SP_Iden1",
	"Smart Predictor connect" AS "SP_Iden2",
	"Smart Predictor identify" AS "SP_Iden3",
	"Smart Predictor suit" AS "SP_Iden4",
	"Smart Predictor me" AS "SP_Iden5",
	"Smart Predictor become" AS "SP_Iden6",
	"Smart Predictor communicate" AS "SP_Iden7",
	"CS Predictor reflect" AS "CS_Iden1",
	"CS Predictor connect" AS "CS_Iden2",
	"CS Predictor identify" AS "CS_Iden3",
	"CS Predictor suit" AS "CS_Iden4",
	"CS Predictor me" AS "CS_Iden5",
	"CS Predictor become" AS "CS_Iden6",
	"CS Predictor communicate" AS "CS_Iden7",
	"Smart Predictor control" AS "SP_Inter1", 
	"Smart Predictor difficult" AS "SP_Inter2", 
	"Smart Predictor encourage" AS "SP_Inter3", 
	"Smart Predictor experiences" AS "SP_Inter4", 
	"Smart Predictor fast" AS "SP_Inter5", 
	"Smart Predictor feedback" AS "SP_Inter6",  
	"Smart Predictor instantaneous" AS "SP_Inter7",  
	"Smart Predictor listen" AS "SP_Inter8",  
	"Smart Predictor no control" AS "SP_Inter9", 
	"Smart Predictor opportunity" AS "SP_Inter10", 
	"Smart Predictor processed" AS "SP_Inter11", 
	"Smart Predictor slow" AS "SP_Inter12",  
	"Smart Predictor two-way" AS "SP_Inter13", 
	"Smart Predictor without any delay" AS "SP_Inter14", 
	"CS Predictor control" AS "CS_Inter1",
	"CS Predictor difficult" AS "CS_Inter2", 
	"CS Predictor encourage" AS "CS_Inter3", 
	"CS Predictor experiences" AS "CS_Inter4",  
	"CS Predictor fast" AS "CS_Inter5",
	"CS Predictor feedback" AS "CS_Inter6", 
	"CS Predictor instantaneous" AS "CS_Inter7",  
	"CS Predictor listen" AS "CS_Inter8", 
	"CS Predictor no control" AS "CS_Inter9",
	"CS Predictor processed" AS "CS_Inter11", 
	"CS Predictor slow" AS "CS_Inter12",
	"CS Predictor two-way" AS "CS_Inter13", 
	"CS Predictor without any delay" AS "CS_Inter14", 
	"CS Predictor opportunity" AS "CS_Inter10", 
	"Smart Predictor compose" AS "SP_Use1", 
	"Smart Predictor easier" AS "SP_Use2", 
	"Smart Predictor effectiveness" AS "SP_Use3", 
	"Smart Predictor performance" AS "SP_Use4", 
	"Smart Predictor productivity" AS "SP_Use5", 
	"Smart Predictor useful" AS "SP_Use6", 
	"CS Predictor compose" AS "CS_Use1", 
	"CS Predictor easier" AS "CS_Use2", 
	"CS Predictor effectiveness" AS "CS_Use3", 
	"CS Predictor performance" AS "CS_Use4", 
	"CS Predictor productivity" AS "CS_Use5", 
	"CS Predictor useful" AS "CS_Use6",
	"Smart Predictor adopt" AS "SP_adopt",
	"CS Predictor adopt" AS "CS_adopt",
	"consequence" AS "Lit1", 
	"automated" AS "Lit2", 
	"human" AS "Lit3", 
	"prioritize" AS "Lit4", 
	"online" AS "Lit5", 
	"data" AS "Lit6", 
	"prejudice" AS "Lit7", 
	"platform" AS "Lit8", 
	"show" AS "Lit9", 
	"suggest" AS "Lit10", 
	"tailor" AS "Lit11",
	"transparent" AS "Lit12", 
	"recommend" AS "Lit13",
	s3_2."bias" AS "Heur1",
	"objective" AS "Heur2",
	"intention" AS "Heur3",
	"frequently" AS "Fre",
	"devices" AS "Dev",
	"extension" AS Extension,
	"break" AS "Break",
	"clarification",
	"gender", 
	"check", 
	"education", 
	"age", 
	"SpanishHispanicLatino", 
	"income", 
	"political", 
	"ethnicity",
	finish - start AS "total_time"
FROM crosstab('
		SELECT 
			  id, 
			  synergy, 
			  bias, 
			  synergy::text || '' '' || bias::text || '' '' || code AS conditional_dprime, 
			  COUNT(synergy::text || '' '' || bias::text || '' '' || code) 
		FROM 
			(SELECT participants.id, e0 AS email_id, b0 AS bias, s0 AS synergy FROM participants INNER JOIN synergy_condition ON participants.id = synergy_condition.id
				UNION ALL 
			SELECT participants.id, e1, b1, s1 FROM participants INNER JOIN synergy_condition ON participants.id = synergy_condition.id
				UNION ALL
			SELECT participants.id, e2, b2, s2 FROM participants INNER JOIN synergy_condition ON participants.id = synergy_condition.id
				UNION ALL
			SELECT participants.id, e3, b3, s3 FROM participants INNER JOIN synergy_condition ON participants.id = synergy_condition.id
				UNION ALL
			SELECT participants.id, e4, b4, s4 FROM participants INNER JOIN synergy_condition ON participants.id = synergy_condition.id
				UNION ALL
			SELECT participants.id, e5, b5, s5 FROM participants INNER JOIN synergy_condition ON participants.id = synergy_condition.id
				UNION ALL
			SELECT participants.id, e6, b6, s6 FROM participants INNER JOIN synergy_condition ON participants.id = synergy_condition.id
				UNION ALL
			SELECT participants.id, e7, b7, s7 FROM participants INNER JOIN synergy_condition ON participants.id = synergy_condition.id) AS temp
				RIGHT JOIN 
			dprime ON temp.email_id = dprime.email_id::INTEGER AND temp.id = dprime.uid
	GROUP BY 1,2,3,4 ORDER BY 1,2,3,4', 
	$$VALUES ('0 1 hit'), ('0 1 miss'), ('0 1 false alarm'), ('0 1 correct rejection'), ('0 0 hit'), ('0 0 miss'), ('0 0 false alarm'), ('0 0 correct rejection'), ('1 1 hit'), ('1 1 miss'), ('1 1 false alarm'), ('1 1 correct rejection'), ('1 0 hit'), ('1 0 miss'), ('1 0 false alarm'), ('1 0 correct rejection')$$)
	AS ct ("id" text, "bias" int, "synergy" int, "NSB Hit" int, "NSB Miss" int, "NSB False Alarm" int, "NSB Correct Rejection" int, "NSUB Hit" int, "NSUB Miss" int, "NSUB False Alarm" int, "NSUB Correct Rejection" int, "SB Hit" int, "SB Miss" int, "SB False Alarm" int, "SB Correct Rejection" int, "SUB Hit" int, "SUB Miss" int, "SUB False Alarm" int, "SUB Correct Rejection" int)
	LEFT JOIN (SELECT mc1.uid, answer FROM manipulation_check_1 AS mc1 INNER JOIN (
SELECT uid, MAX(submission_time) AS submission_time FROM manipulation_check_1 GROUP BY uid
) AS mctemp ON mc1.uid = mctemp.uid AND mc1.submission_time = mctemp.submission_time) AS mc1 ON id = mc1.uid
	LEFT JOIN manipulation_check_2 AS mc2 ON id = mc2.uid
LEFT JOIN(
SELECT 
	id,
	MAX("Smart Predictor transparent") AS "Smart Predictor transparent",
	MAX("Smart Predictor credible") AS "Smart Predictor credible",
	MAX("Smart Predictor fair") AS "Smart Predictor fair",
	MAX("Smart Predictor competent") AS "Smart Predictor competent",
	MAX("Smart Predictor expert") AS "Smart Predictor expert",
	MAX("Smart Predictor benevolent") AS "Smart Predictor benevolent",
	MAX("Smart Predictor trustworthy") AS "Smart Predictor trustworthy",
	MAX("Smart Predictor unbiased") AS "Smart Predictor unbiased",
	MAX("CS Predictor transparent") AS "CS Predictor transparent",
	MAX("CS Predictor credible") AS "CS Predictor credible",
	MAX("CS Predictor fair") AS "CS Predictor fair",
	MAX("CS Predictor competent") AS "CS Predictor competent",
	MAX("CS Predictor expert") AS "CS Predictor expert",
	MAX("CS Predictor benevolent") AS "CS Predictor benevolent",
	MAX("CS Predictor trustworthy") AS "CS Predictor trustworthy",
	MAX("CS Predictor unbiased") AS "CS Predictor unbiased"
	FROM crosstab('SELECT uid, algorithm || '' '' || measure AS algorithm_measure, value FROM survey_1', 
	   $$VALUES 
		('Smart Predictor transparent'), 
		('Smart Predictor credible'),
		('Smart Predictor fair'), 
		('Smart Predictor competent'), 
		('Smart Predictor expert'), 
		('Smart Predictor benevolent'), 
		('Smart Predictor trustworthy'), 
		('Smart Predictor unbiased'),
		('CS Predictor transparent'), 
		('CS Predictor credible'),
		('CS Predictor fair'), 
		('CS Predictor competent'), 
		('CS Predictor expert'), 
		('CS Predictor benevolent'), 
		('CS Predictor trustworthy'), 
		('CS Predictor unbiased')$$)
	   AS ct ("id" text, "Smart Predictor transparent" text, "Smart Predictor credible" text, "Smart Predictor fair" text, "Smart Predictor competent" text, "Smart Predictor expert" text, "Smart Predictor benevolent" text, "Smart Predictor trustworthy" text, "Smart Predictor unbiased" text, "CS Predictor transparent" text, "CS Predictor credible" text, "CS Predictor fair" text, "CS Predictor competent" text, "CS Predictor expert" text, "CS Predictor benevolent" text, "CS Predictor trustworthy" text, "CS Predictor unbiased" text)
	  GROUP BY id
) AS s1 ON ct.id = s1.id
LEFT JOIN(SELECT 
	id,
	MAX("Smart Predictor understand") AS "Smart Predictor understand",
	MAX("Smart Predictor comfort") AS "Smart Predictor comfort",
	MAX("Smart Predictor confident") AS "Smart Predictor confident",
	MAX("CS Predictor understand") AS "CS Predictor understand",
	MAX("CS Predictor comfort") AS "CS Predictor comfort",
	MAX("CS Predictor confident") AS "CS Predictor confident"
	FROM crosstab('SELECT uid, algorithm || '' '' || question AS algorithm_question, answer FROM survey_2', 
					   $$VALUES 
						('Smart Predictor understand'), 
						('Smart Predictor comfort'),
						('Smart Predictor confident'), 
						('CS Predictor understand'), 
						('CS Predictor comfort'),
						('CS Predictor confident')$$)
					   AS ct ("id" text, "Smart Predictor understand" text, "Smart Predictor comfort" text, "Smart Predictor confident" text, "CS Predictor understand" text, "CS Predictor comfort" text, "CS Predictor confident" text) GROUP BY id)
	AS s2 ON ct.id = s2.id
LEFT JOIN(
SELECT 
	id,
	MAX("Smart Predictor reflect") AS "Smart Predictor reflect",
	MAX("Smart Predictor connect") AS "Smart Predictor connect",
	MAX("Smart Predictor identify") AS "Smart Predictor identify",
	MAX("Smart Predictor suit") AS "Smart Predictor suit",
	MAX("Smart Predictor me") AS "Smart Predictor me",
	MAX("Smart Predictor become") AS "Smart Predictor become",
	MAX("Smart Predictor communicate") AS "Smart Predictor communicate",
	MAX("CS Predictor reflect") AS "CS Predictor reflect",
	MAX("CS Predictor connect") AS "CS Predictor connect",
	MAX("CS Predictor identify") AS "CS Predictor identify",
	MAX("CS Predictor suit") AS "CS Predictor suit",
	MAX("CS Predictor me") AS "CS Predictor me",
	MAX("CS Predictor become") AS "CS Predictor become",
	MAX("CS Predictor communicate") AS "CS Predictor communicate"
	FROM crosstab('SELECT uid, algorithm || '' '' || question AS algorithm_question, answer FROM survey_3', 
					   $$VALUES 
						('Smart Predictor reflect'), 
						('Smart Predictor connect'),
						('Smart Predictor identify'), 
				  		('Smart Predictor suit'), 
				  		('Smart Predictor me'), 
				  		('Smart Predictor become'),
				  		('Smart Predictor communicate'),
				  		('CS Predictor reflect'), 
						('CS Predictor connect'),
						('CS Predictor identify'), 
				  		('CS Predictor suit'), 
				  		('CS Predictor me'), 
				  		('CS Predictor become'),
				  		('CS Predictor communicate')$$)
					   AS ct ("id" text, "Smart Predictor reflect" text, "Smart Predictor connect" text, "Smart Predictor identify" text, "Smart Predictor suit" text, "Smart Predictor me" text, "Smart Predictor become" text, "Smart Predictor communicate" text, "CS Predictor reflect" text, "CS Predictor connect" text, "CS Predictor identify" text, "CS Predictor suit" text, "CS Predictor me" text, "CS Predictor become" text, "CS Predictor communicate" text) GROUP BY id
) AS s3 ON ct.id = s3.id
LEFT JOIN(SELECT 
	id,
	MAX("Smart Predictor control") AS "Smart Predictor control",
	MAX("Smart Predictor difficult") AS "Smart Predictor difficult",
	MAX("Smart Predictor encourage") AS "Smart Predictor encourage",
	MAX("Smart Predictor experiences") AS "Smart Predictor experiences",
	MAX("Smart Predictor fast") AS "Smart Predictor fast",
	MAX("Smart Predictor feedback") AS "Smart Predictor feedback",
	MAX("Smart Predictor instantaneous") AS "Smart Predictor instantaneous",
	MAX("Smart Predictor listen") AS "Smart Predictor listen",
    MAX("Smart Predictor no control") AS "Smart Predictor no control",
    MAX("Smart Predictor opportunity") AS "Smart Predictor opportunity",
    MAX("Smart Predictor processed") AS "Smart Predictor processed",
    MAX("Smart Predictor slow") AS "Smart Predictor slow",
    MAX("Smart Predictor two-way") AS "Smart Predictor two-way",
    MAX("Smart Predictor without any delay") AS "Smart Predictor without any delay", 
    MAX("CS Predictor control") AS "CS Predictor control",
	MAX("CS Predictor difficult") AS "CS Predictor difficult",
	MAX("CS Predictor encourage") AS "CS Predictor encourage",
	MAX("CS Predictor experiences") AS "CS Predictor experiences",
	MAX("CS Predictor fast") AS "CS Predictor fast",
	MAX("CS Predictor feedback") AS "CS Predictor feedback",
	MAX("CS Predictor instantaneous") AS "CS Predictor instantaneous",
	MAX("CS Predictor listen") AS "CS Predictor listen",
    MAX("CS Predictor no control") AS "CS Predictor no control",
    MAX("CS Predictor opportunity") AS "CS Predictor opportunity",
    MAX("CS Predictor processed") AS "CS Predictor processed",
    MAX("CS Predictor slow") AS "CS Predictor slow",
    MAX("CS Predictor two-way") AS "CS Predictor two-way",
    MAX("CS Predictor without any delay") AS "CS Predictor without any delay" 
	FROM crosstab('SELECT uid, algorithm || '' '' || question AS algorithm_question, answer FROM survey_4', 
					   $$VALUES 
						('Smart Predictor control'), 
						('Smart Predictor difficult'),
						('Smart Predictor encourage'), 
				  		('Smart Predictor experiences'), 
				  		('Smart Predictor fast'), 
				  		('Smart Predictor feedback'),
				  		('Smart Predictor instantaneous'),
				  		('Smart Predictor listen'), 
                        ('Smart Predictor no control'),
                        ('Smart Predictor opportunity'),
                        ('Smart Predictor processed'),
                        ('Smart Predictor slow'),
                        ('Smart Predictor two-way'),
                        ('Smart Predictor without any delay'),
						('CS Predictor control'), 
						('CS Predictor difficult'),
						('CS Predictor encourage'), 
				  		('CS Predictor experiences'), 
				  		('CS Predictor fast'), 
				  		('CS Predictor feedback'),
				  		('CS Predictor instantaneous'),
				  		('CS Predictor listen'), 
                        ('CS Predictor no control'),
                        ('CS Predictor opportunity'),
                        ('CS Predictor processed'),
                        ('CS Predictor slow'),
                        ('CS Predictor two-way'),
                        ('CS Predictor without any delay')$$)
					   AS ct (
                           "id" text, 
                            "Smart Predictor control" text, 
                            "Smart Predictor difficult" text, 
                            "Smart Predictor encourage" text, 
                            "Smart Predictor experiences" text, 
                            "Smart Predictor fast" text, 
                            "Smart Predictor feedback" text, 
                            "Smart Predictor instantaneous" text, 
                            "Smart Predictor listen" text, 
                            "Smart Predictor no control" text, 
                            "Smart Predictor opportunity" text, 
                            "Smart Predictor processed" text, 
                            "Smart Predictor slow" text, 
                            "Smart Predictor two-way" text, 
                            "Smart Predictor without any delay" text, 
                            "CS Predictor control" text, 
                            "CS Predictor difficult" text, 
                            "CS Predictor encourage" text, 
                            "CS Predictor experiences" text, 
                            "CS Predictor fast" text, 
                            "CS Predictor feedback" text, 
                            "CS Predictor instantaneous" text, 
                            "CS Predictor listen" text, 
                            "CS Predictor no control" text, 
                            "CS Predictor opportunity" text, 
                            "CS Predictor processed" text, 
                            "CS Predictor slow" text, 
                            "CS Predictor two-way" text, 
                            "CS Predictor without any delay" text) GROUP BY id)
    AS s4 ON ct.id = s4.id
LEFT JOIN(SELECT 
	id,
	MAX("Smart Predictor compose") AS "Smart Predictor compose",
	MAX("Smart Predictor easier") AS "Smart Predictor easier",
	MAX("Smart Predictor effectiveness") AS "Smart Predictor effectiveness",
	MAX("Smart Predictor performance") AS "Smart Predictor performance",
	MAX("Smart Predictor productivity") AS "Smart Predictor productivity",
	MAX("Smart Predictor useful") AS "Smart Predictor useful",
    MAX("CS Predictor compose") AS "CS Predictor compose",
	MAX("CS Predictor easier") AS "CS Predictor easier",
	MAX("CS Predictor effectiveness") AS "CS Predictor effectiveness",
	MAX("CS Predictor performance") AS "CS Predictor performance",
	MAX("CS Predictor productivity") AS "CS Predictor productivity",
	MAX("CS Predictor useful") AS "CS Predictor useful"
	FROM crosstab('SELECT uid, algorithm || '' '' || question AS algorithm_question, answer FROM survey_5', 
					   $$VALUES 
						('Smart Predictor compose'), 
						('Smart Predictor easier'),
						('Smart Predictor effectiveness'), 
				  		('Smart Predictor performance'), 
				  		('Smart Predictor productivity'), 
				  		('Smart Predictor useful'),
				  		('CS Predictor compose'), 
						('CS Predictor easier'),
						('CS Predictor effectiveness'), 
				  		('CS Predictor performance'), 
				  		('CS Predictor productivity'), 
				  		('CS Predictor useful')$$)
					   AS ct (
                           "id" text, 
                            "Smart Predictor compose" text, 
                            "Smart Predictor easier" text, 
                            "Smart Predictor effectiveness" text, 
                            "Smart Predictor performance" text, 
                            "Smart Predictor productivity" text, 
                            "Smart Predictor useful" text, 
                            "CS Predictor compose" text, 
                            "CS Predictor easier" text, 
                            "CS Predictor effectiveness" text, 
                            "CS Predictor performance" text, 
                            "CS Predictor productivity" text, 
                            "CS Predictor useful" text) GROUP BY id)
AS s5 ON ct.id = s5.id
LEFT JOIN(
SELECT 
	id,
	MAX("Smart Predictor adopt") AS "Smart Predictor adopt",
	MAX("CS Predictor adopt") AS "CS Predictor adopt"
	FROM crosstab('SELECT uid, algorithm || '' '' || question AS algorithm_question, answer FROM survey_6', 
					   $$VALUES 
						('Smart Predictor adopt'), 
						('CS Predictor adopt')$$)
					   AS ct (
                           "id" text, 
                            "Smart Predictor adopt" text, 
                            "CS Predictor adopt" text) GROUP BY id)
AS s6 ON ct.id = s6.id
LEFT JOIN(
SELECT 
	id,
	MAX("consequence") AS "consequence",
	MAX("automated") AS "automated",
	MAX("human") AS "human",
	MAX("prioritize") AS "prioritize",
	MAX("online") AS "online",
    MAX("data") AS "data",
	MAX("prejudice") AS "prejudice",
	MAX("platform") AS "platform",
	MAX("show") AS "show",
	MAX("suggest") AS "suggest",
	MAX("tailor") AS "tailor",
	MAX("transparent") AS "transparent",
	MAX("recommend") AS "recommend"
	FROM crosstab('SELECT uid, question, answer FROM survey_3_1', 
					   $$VALUES 
						('consequence'), 
						('automated'),
						('human'), 
				  		('prioritize'), 
				  		('online'),
				  		('data'), 
						('prejudice'),
						('platform'), 
				  		('show'), 
				  		('suggest'), 
				  		('tailor'),
                        ('transparent'),
                        ('recommend')$$)
					   AS ct (
                           "id" text, 
                            "consequence" text, 
                            "automated" text, 
                            "human" text, 
                            "prioritize" text, 
                            "online" text, 
                            "data" text, 
                            "prejudice" text, 
                            "platform" text, 
                            "show" text, 
                            "suggest" text, 
                            "tailor" text,
                            "transparent" text, 
                            "recommend" text) GROUP BY id)
AS s3_1 ON ct.id = s3_1.id
LEFT JOIN(SELECT 
	id,
	MAX("bias") AS "bias",
	MAX("objective") AS "objective",
	MAX("intention") AS "intention"
	FROM crosstab('SELECT uid, question, answer FROM survey_3_2', 
					   $$VALUES 
						('bias'), 
						('objective'),
						('intention')$$)
					   AS ct (
                           "id" text, 
                            "bias" text, 
                            "objective" text, 
                            "intention" text) GROUP BY id)
AS s3_2 ON ct.id = s3_2.id
LEFT JOIN(SELECT uid, answer AS frequently FROM survey_3_3
) AS s3_3 ON ct.id = s3_3.uid
LEFT JOIN(SELECT uid, MAX(devices) AS devices FROM survey_3_4 GROUP BY uid) AS s3_4 ON ct.id = s3_4.uid
LEFT JOIN(SELECT 
	id,
	MAX("extension") AS "extension",
	MAX("break") AS "break"
	FROM crosstab('SELECT uid, question, answer FROM survey_3_4_5', 
					   $$VALUES 
						('extension'), 
						('break')$$)
					   AS ct (
                           "id" text, 
                            "extension" text, 
                            "break" text) GROUP BY id) AS s3_4_5 ON ct.id = s3_4_5.id
LEFT JOIN(SELECT uid, MAX(clarification) AS clarification FROM survey_3_4_5_6 GROUP BY uid) AS s3_4_5_6 ON ct.id = s3_4_5_6.uid
LEFT JOIN(SELECT 
	id,
	MAX("gender") AS "gender",
	MAX("check") AS "check",
	MAX("education") AS "education",
	MAX("age") AS "age",
	MAX("SpanishHispanicLatino") AS "SpanishHispanicLatino",
    MAX("income") AS "income",
	MAX("political") AS "political",
	MAX("ethnicity") AS "ethnicity"
	FROM crosstab('SELECT uid, question, answer FROM survey_3_5', 
					   $$VALUES 
						('gender'), 
						('check'),
						('education'), 
				  		('age'), 
				  		('SpanishHispanicLatino'),
				  		('income'), 
						('political'),
						('ethnicity')$$)
					   AS ct (
                           "id" text, 
                            "gender" text, 
                            "check" text, 
                            "education" text, 
                            "age" text, 
                            "SpanishHispanicLatino" text, 
                            "income" text, 
                            "political" text, 
                            "ethnicity" text) GROUP BY id)
		AS s3_5 ON ct.id = s3_5.id
LEFT JOIN participants ON ct.id = participants.id
ORDER BY id;