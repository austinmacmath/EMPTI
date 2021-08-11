--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.2

-- Started on 2021-08-11 00:26:30 PDT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 201 (class 1259 OID 16390)
-- Name: email_prompts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.email_prompts (
    id integer NOT NULL,
    description text,
    salutation text,
    body text,
    closing text,
    sender text
);


ALTER TABLE public.email_prompts OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16388)
-- Name: email_prompts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.email_prompts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.email_prompts_id_seq OWNER TO postgres;

--
-- TOC entry 3341 (class 0 OID 0)
-- Dependencies: 200
-- Name: email_prompts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.email_prompts_id_seq OWNED BY public.email_prompts.id;


--
-- TOC entry 214 (class 1259 OID 16562)
-- Name: manipulation_check_1; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.manipulation_check_1 (
    uid text,
    submission_time timestamp without time zone,
    answer text
);


ALTER TABLE public.manipulation_check_1 OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16568)
-- Name: manipulation_check_2; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.manipulation_check_2 (
    uid text,
    submission_time timestamp without time zone,
    answer text
);


ALTER TABLE public.manipulation_check_2 OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16504)
-- Name: participants; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.participants (
    id text NOT NULL,
    e0 integer,
    e1 integer,
    e2 integer,
    e3 integer,
    e4 integer,
    e5 integer,
    e6 integer,
    e7 integer,
    b0 integer,
    b1 integer,
    b2 integer,
    b3 integer,
    b4 integer,
    b5 integer,
    b6 integer,
    b7 integer,
    prompt_count integer,
    synergy_first integer,
    completed integer,
    t0_complete integer,
    t1_complete integer
);


ALTER TABLE public.participants OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 16516)
-- Name: questionnaire_1; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.questionnaire_1 (
    uid text,
    submission_time timestamp without time zone,
    medium text,
    frequency text
);


ALTER TABLE public.questionnaire_1 OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16524)
-- Name: questionnaire_2; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.questionnaire_2 (
    uid text,
    submission_time timestamp without time zone,
    medium text,
    frequency text
);


ALTER TABLE public.questionnaire_2 OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16538)
-- Name: questionnaire_3; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.questionnaire_3 (
    uid text,
    submission_time timestamp without time zone,
    medium text,
    frequency text
);


ALTER TABLE public.questionnaire_3 OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16544)
-- Name: questionnaire_4; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.questionnaire_4 (
    uid text,
    submission_time timestamp without time zone,
    medium text,
    frequency text
);


ALTER TABLE public.questionnaire_4 OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16550)
-- Name: questionnaire_5; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.questionnaire_5 (
    uid text,
    submission_time timestamp without time zone,
    perspective text,
    checked boolean
);


ALTER TABLE public.questionnaire_5 OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16556)
-- Name: questionnaire_6; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.questionnaire_6 (
    uid text,
    submission_time timestamp without time zone,
    ability text,
    skill text
);


ALTER TABLE public.questionnaire_6 OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16401)
-- Name: responses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.responses (
    id integer NOT NULL,
    response text,
    submission_time timestamp without time zone,
    uid text,
    email_id integer
);


ALTER TABLE public.responses OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16399)
-- Name: responses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.responses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.responses_id_seq OWNER TO postgres;

--
-- TOC entry 3342 (class 0 OID 0)
-- Dependencies: 202
-- Name: responses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.responses_id_seq OWNED BY public.responses.id;


--
-- TOC entry 205 (class 1259 OID 16460)
-- Name: tabs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tabs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public.tabs_id_seq OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16462)
-- Name: tabs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tabs (
    id integer DEFAULT nextval('public.tabs_id_seq'::regclass) NOT NULL,
    uid text,
    email_id integer,
    predictive_text text,
    tab_time bigint,
    hit_time bigint,
    miss_time bigint,
    false_alarm_time bigint
);


ALTER TABLE public.tabs OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16416)
-- Name: test; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.test (
    id integer
);


ALTER TABLE public.test OWNER TO postgres;

--
-- TOC entry 3179 (class 2604 OID 16393)
-- Name: email_prompts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_prompts ALTER COLUMN id SET DEFAULT nextval('public.email_prompts_id_seq'::regclass);


--
-- TOC entry 3180 (class 2604 OID 16404)
-- Name: responses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.responses ALTER COLUMN id SET DEFAULT nextval('public.responses_id_seq'::regclass);


--
-- TOC entry 3321 (class 0 OID 16390)
-- Dependencies: 201
-- Data for Name: email_prompts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.email_prompts (id, description, salutation, body, closing, sender) FROM stdin;
1	Hiring a Research Assistant	Dear scholars,	Professor Adam Kim from the College of Social Sciences is looking for a research assistant that can help him with his research that spans a wide range of topics. If you are interested in this opportunity, please email Professor Adam Kim with answers to the following questions.\n\n\t1. Why are you interested in doing research?\n\t2. What skills or past experience do you currently possess that would be applicable to this opportunity?\n\t3. What skills do you hope to gain from this experience?\n	Kind regards,\n\nBeth Davis\n\nUndergraduate Advisor\n	Beth Davis
2	Joining a Club	Hello students,	Reading at UCSB is hosting its first meeting of the quarter this upcoming Thursday at 7pm. If you are interested in expanding your knowledge and engaging in deep discussions about literature, please email Professor Davis about joining. We would love to get to know you and learn more about your interest in Reading at UCSB.\n\n\t1. Firstly, what type of books would you be interested in reading this quarter? Please provide one to two examples for reference.\n\t2. What is your favorite book and why is it your favorite?\n\t3. What are you hoping to gain from joining Reading at UCSB? (a community, exposure to literature, etc.)\n	Kindly,\n\nReading at UCSB\n	Reading at UCSB
3	Seeking Help for Community Service	Hello fellow community members,	My name is Meghan O'Connor, and I am the community service coordinator for Keep It Clean. This weekend we will be hosting a community beautification project, and we would love your help. If you are interested in this opportunity, please respond with your name, your weekend availability, your past experience doing community service, and any questions you may have about this opportunity.	Thanks,\n\nMeghan O’Connor\n\nKeep It Clean Community Service Coordinator	Meghan O’Connor
4	Hiring Tutors	Hello,	Tutors SB is looking for bright college undergraduates to help tutor students grades K through 12. The job pays $15/hour, and we are looking for tutors in all subject areas. If you are interested in applying, please reply to this email with answers to the following questions.\n\n\t1. What skills could you bring to this job?\n\t2. What are your strongest subject areas?\n\t3. What is your weekly availability?\n\t4. What is your preferred age range?\n\nI am looking forward to reviewing your applications.	Kindly,\n\nDiane Frost\n\nHiring Manager \n\nTutor SB	Diane Frost
5	Fall Sublease	Hi,	My name is Jackie Freedman and I am looking to sublease my spot in a double room in Isla Vista for the Fall quarter of 2021. I live with three other roommates in a spacious 2 bedroom, 2 bathroom apartment. Rent and utilities are around $800 a month. If you are interested, please email me back with answers to the following questions as well as and your availability to come see the apartment and meet the rest of the roommates.\n\t1. What year are you in school?\n\t2. What is your major?\n\t3. Are you typically a clean person?\n\t4. Are you good with animals? (we have a dog named Luna and a hamster named Marshmallow)\n\t5. Are you planning on bringing a car?\n\t6. Do you have any food allergies?\n\t7. How would your friends describe you?	Best,\nJackie Freedman	Jackie Freedman
6	College Fair	Hello Undergraduates,	My name is Kenneth Wong and I am the new career advisor at your old high school. In two weeks, we will be holding our annual College Fair that informs students about life in college, and we would love to share some real college experiences from students like you. If you are interested, please respond to this email with your name, major, campus involvement, any college experiences you would like to share, and any advice for students as they are applying to college.	Thanks!\nKenneth Wong\nCareer Advisor	Kenneth Wong
7	Rec Letter	Hello,	I would be more than happy to write you a letter of recommendation for your study abroad program. However, before I do, I have a few questions for you:\n\t1. What do you hope to gain from studying abroad?\n\t2, How will studying abroad enrich your learning experience?\n\t3. Why did you decide to study abroad?\n\t4. What makes you a good candidate for this program?\n\t5. Which country are you hoping to study abroad in?\n\t6. Where should I email the letter of recommendation?\nThank you and good luck with your application.	Best,\nProfessor Warble	Professor Warble
8	Catching Up	Hi,	I hope you are doing well. It has been a while since we got to catch up, so your uncle and I just wanted to check in and see how you are doing. How is school going and how are your classes? Are you working at all? How are your friends? Any new special someone we should know about? Do you need anything? We are looking forward to hearing from you soon!	Caringly,\nAunt Carol and Uncle Jeff	Aunt Carol
9	Internship Recruitment	Hello,	Thank you for applying to our internship program. The recruiting team is looking forward to reviewing your application. We have a few additional questions for you. Please update your application with answers to the following questions:\n\t1. Why are you interested in becoming an intern?\n\t2. What skills would you like to gain through this internship?\n\t3. How do you work in a team environment?\n\t4. What are your career goals for after college?\nPlease respond to this email with responses to these questions so they can be added to your application.	Thanks,\nThe University Recruiting Team	The University Recruiting Team
10	Writing a Review	Hello,	Thank you so much for your purchase from Stay Warm. We hope you are enjoying your new sweatshirt. We would love to hear about your experience. Please answer the following questions regarding  your new product and your purchasing experience so we can continue to provide you with high quality products and service.\n\t1. How did you hear about Stay Warm? \n\t2. How was your shopping experience? \n\t3. What products would you like to see in the future?\n\t4. Are you enjoying your new sweatshirt from Stay Warm?	Thanks,\nThe Stay Warm Team	The Stay Warm Team
11	Trying to Buy a Used Car	Hello,	Thank you for your response to my Craigslist posting and for your interest in buying my car. The car is a 2018 in relatively good condition. Please let me know if you have any question, and please let me know your availability to do a test drive.	Best,\nBailey Hobbs	Bailey Hobbs
12	Career Fair	Hello Students,	We are planning UCSB’s quarterly career fair to help students like you learn about a variety of careers, improve your resumes, and equip you with interviewing skills to help you get the jobs you want. But we need your help! Please respond to this email with anything you would like to specifically see at the career fair such as resume workshops, mock interviewing stations, networking opportunities, etc. Additionally, please email in your career interests and any questions you may have for our live panel of UCSB Alumni who have now joined the workforce. We are looking forward to your input.	Kindly,\nCole Albertson\nUndergraduate Career Advisor	Cole Albertson
\.


--
-- TOC entry 3334 (class 0 OID 16562)
-- Dependencies: 214
-- Data for Name: manipulation_check_1; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.manipulation_check_1 (uid, submission_time, answer) FROM stdin;
\.


--
-- TOC entry 3335 (class 0 OID 16568)
-- Dependencies: 215
-- Data for Name: manipulation_check_2; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.manipulation_check_2 (uid, submission_time, answer) FROM stdin;
\.


--
-- TOC entry 3327 (class 0 OID 16504)
-- Dependencies: 207
-- Data for Name: participants; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.participants (id, e0, e1, e2, e3, e4, e5, e6, e7, b0, b1, b2, b3, b4, b5, b6, b7, prompt_count, synergy_first, completed, t0_complete, t1_complete) FROM stdin;
\.


--
-- TOC entry 3328 (class 0 OID 16516)
-- Dependencies: 208
-- Data for Name: questionnaire_1; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questionnaire_1 (uid, submission_time, medium, frequency) FROM stdin;
\.


--
-- TOC entry 3329 (class 0 OID 16524)
-- Dependencies: 209
-- Data for Name: questionnaire_2; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questionnaire_2 (uid, submission_time, medium, frequency) FROM stdin;
\.


--
-- TOC entry 3330 (class 0 OID 16538)
-- Dependencies: 210
-- Data for Name: questionnaire_3; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questionnaire_3 (uid, submission_time, medium, frequency) FROM stdin;
\.


--
-- TOC entry 3331 (class 0 OID 16544)
-- Dependencies: 211
-- Data for Name: questionnaire_4; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questionnaire_4 (uid, submission_time, medium, frequency) FROM stdin;
\.


--
-- TOC entry 3332 (class 0 OID 16550)
-- Dependencies: 212
-- Data for Name: questionnaire_5; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questionnaire_5 (uid, submission_time, perspective, checked) FROM stdin;
\.


--
-- TOC entry 3333 (class 0 OID 16556)
-- Dependencies: 213
-- Data for Name: questionnaire_6; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questionnaire_6 (uid, submission_time, ability, skill) FROM stdin;
\.


--
-- TOC entry 3323 (class 0 OID 16401)
-- Dependencies: 203
-- Data for Name: responses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.responses (id, response, submission_time, uid, email_id) FROM stdin;
\.


--
-- TOC entry 3326 (class 0 OID 16462)
-- Dependencies: 206
-- Data for Name: tabs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tabs (id, uid, email_id, predictive_text, tab_time, hit_time, miss_time, false_alarm_time) FROM stdin;
\.


--
-- TOC entry 3324 (class 0 OID 16416)
-- Dependencies: 204
-- Data for Name: test; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.test (id) FROM stdin;
\.


--
-- TOC entry 3343 (class 0 OID 0)
-- Dependencies: 200
-- Name: email_prompts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.email_prompts_id_seq', 1, false);


--
-- TOC entry 3344 (class 0 OID 0)
-- Dependencies: 202
-- Name: responses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.responses_id_seq', 912, true);


--
-- TOC entry 3345 (class 0 OID 0)
-- Dependencies: 205
-- Name: tabs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tabs_id_seq', 48, true);


--
-- TOC entry 3183 (class 2606 OID 16398)
-- Name: email_prompts email_prompts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_prompts
    ADD CONSTRAINT email_prompts_pkey PRIMARY KEY (id);


--
-- TOC entry 3189 (class 2606 OID 16511)
-- Name: participants participants_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.participants
    ADD CONSTRAINT participants_pkey PRIMARY KEY (id);


--
-- TOC entry 3185 (class 2606 OID 16409)
-- Name: responses responses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.responses
    ADD CONSTRAINT responses_pkey PRIMARY KEY (id);


--
-- TOC entry 3187 (class 2606 OID 16470)
-- Name: tabs tabs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tabs
    ADD CONSTRAINT tabs_pkey PRIMARY KEY (id);


-- Completed on 2021-08-11 00:26:30 PDT

--
-- PostgreSQL database dump complete
--

