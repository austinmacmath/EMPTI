--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.2

-- Started on 2021-08-22 22:56:48 PDT

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
-- TOC entry 226 (class 1259 OID 24648)
-- Name: dprime; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dprime (
    uid text,
    submission_time timestamp without time zone,
    email_id text,
    code text,
    suggestion text,
    suggestion_time text,
    root text,
    tab_time text
);


ALTER TABLE public.dprime OWNER TO postgres;

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
-- TOC entry 3404 (class 0 OID 0)
-- Dependencies: 200
-- Name: email_prompts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.email_prompts_id_seq OWNED BY public.email_prompts.id;


--
-- TOC entry 213 (class 1259 OID 16562)
-- Name: manipulation_check_1; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.manipulation_check_1 (
    uid text,
    submission_time timestamp without time zone,
    answer text
);


ALTER TABLE public.manipulation_check_1 OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16568)
-- Name: manipulation_check_2; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.manipulation_check_2 (
    uid text,
    submission_time timestamp without time zone,
    answer text
);


ALTER TABLE public.manipulation_check_2 OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16504)
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
-- TOC entry 207 (class 1259 OID 16516)
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
-- TOC entry 208 (class 1259 OID 16524)
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
-- TOC entry 209 (class 1259 OID 16538)
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
-- TOC entry 210 (class 1259 OID 16544)
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
-- TOC entry 211 (class 1259 OID 16550)
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
-- TOC entry 212 (class 1259 OID 16556)
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
-- TOC entry 3405 (class 0 OID 0)
-- Dependencies: 202
-- Name: responses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.responses_id_seq OWNED BY public.responses.id;


--
-- TOC entry 215 (class 1259 OID 24576)
-- Name: survey_1; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.survey_1 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    measure text,
    value text
);


ALTER TABLE public.survey_1 OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 24582)
-- Name: survey_2; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.survey_2 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    question text,
    answer text
);


ALTER TABLE public.survey_2 OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 24588)
-- Name: survey_3; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.survey_3 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    question text,
    answer text
);


ALTER TABLE public.survey_3 OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 24612)
-- Name: survey_3_1; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.survey_3_1 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    question text,
    answer text
);


ALTER TABLE public.survey_3_1 OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 24618)
-- Name: survey_3_2; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.survey_3_2 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    question text,
    answer text
);


ALTER TABLE public.survey_3_2 OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 24624)
-- Name: survey_3_3; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.survey_3_3 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    question text,
    answer text
);


ALTER TABLE public.survey_3_3 OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 24630)
-- Name: survey_3_4; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.survey_3_4 (
    uid text,
    submission_time timestamp without time zone,
    devices text
);


ALTER TABLE public.survey_3_4 OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 24636)
-- Name: survey_3_5; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.survey_3_5 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    question text,
    answer text
);


ALTER TABLE public.survey_3_5 OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 24594)
-- Name: survey_4; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.survey_4 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    question text,
    answer text
);


ALTER TABLE public.survey_4 OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 24600)
-- Name: survey_5; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.survey_5 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    question text,
    answer text
);


ALTER TABLE public.survey_5 OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 24606)
-- Name: survey_6; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.survey_6 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    question text,
    answer text
);


ALTER TABLE public.survey_6 OWNER TO postgres;

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
-- TOC entry 204 (class 1259 OID 16416)
-- Name: test; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.test (
    id integer
);


ALTER TABLE public.test OWNER TO postgres;

--
-- TOC entry 3234 (class 2604 OID 16393)
-- Name: email_prompts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_prompts ALTER COLUMN id SET DEFAULT nextval('public.email_prompts_id_seq'::regclass);


--
-- TOC entry 3235 (class 2604 OID 16404)
-- Name: responses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.responses ALTER COLUMN id SET DEFAULT nextval('public.responses_id_seq'::regclass);


--
-- TOC entry 3398 (class 0 OID 24648)
-- Dependencies: 226
-- Data for Name: dprime; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.dprime (uid, submission_time, email_id, code, suggestion, suggestion_time, root, tab_time) FROM stdin;
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.82178	5	miss	a	1629681388976	as	1629681388992
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.822067	5	miss	a	1629681390858	am	1629681390890
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.822304	5	miss	looking	1629681390992	g	1629681391076
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.822512	5	miss	a	1629681391693	ac	1629681391937
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.822731	5	miss	good	1629681391117	goi	1629681391162
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.822963	5	miss	access	1629681391943	ack	1629681392038
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.863767	5	miss	a	1629681394012	as	1629681394097
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.865341	5	miss	sublease	1629681394422	sd	1629681394444
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.865208	5	miss	as	1629681394104	asd	1629681394145
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.865653	5	miss	sd	1629681394450	sdf	1629681394498
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.866058	5	miss	sublease	1629681395312	sd	1629681395354
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.866615	5	miss	sd	1629681395637	d	1629681395673
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.868386	5	miss	sd	1629681396100	d	1629681396166
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.868453	5	miss	sd	1629681396272	d	1629681396313
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.868467	5	miss	sd	1629681396413	a	1629681396677
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.866927	5	miss	sd	1629681395956	d	1629681395977
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.868629	5	miss	a	1629681398977	af	1629681400381
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.866646	5	miss	as	1629681388998	asd	1629681389068
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.868867	5	miss	sd	1629681400695	d	1629681400731
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.870148	5	miss	d	1629681400883	dd	1629681401020
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.868692	5	hit	acknowledge	1629681392043	ack	1629681392708
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:42.869851	5	miss	sd	1629681400863	d	1629681400877
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:23.795112	6	miss	sd	1629681737414	sdf	1629681737464
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:23.795462	6	miss	students	1629681737362	sd	1629681737408
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:23.795893	6	miss	and	1629681737547	as	1629681737597
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:23.855742	6	miss	and	1629681738659	as	1629681738731
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:33.773385	1	miss	adam	1629681750812	as	1629681750908
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:23.796819	6	miss	as	1629681737602	asd	1629681737627
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:23.858602	6	miss	and	1629681738916	as	1629681738988
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:33.773161	1	miss	sd	1629681750118	sdf	1629681750161
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:23.797379	6	miss	as	1629681738270	asd	1629681738290
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:23.858614	6	miss	d	1629681739127	a	1629681739168
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:33.773522	1	miss	adam	1629681751119	as	1629681751164
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:23.853164	6	miss	as	1629681738476	asd	1629681738526
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:23.86603	6	miss	d	1629681740217	s	1629681740281
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:23.858984	6	miss	and	1629681739174	as	1629681739248
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:33.773302	1	miss	sd	1629681750618	sdf	1629681750669
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:23.855414	6	miss	d	1629681738620	a	1629681738653
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:33.773448	1	miss	assistant	1629681750915	asd	1629681750961
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:23.858644	6	miss	d	1629681738386	a	1629681738416
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:33.773119	1	miss	skills	1629681750052	sd	1629681750112
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:23.859725	6	miss	and	1629681738423	as	1629681738469
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:33.779283	1	miss	adam	1629681751373	as	1629681751465
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:33.780606	1	miss	assistant	1629681751470	asd	1629681751476
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:33.773228	1	miss	skills	1629681750574	sd	1629681750611
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:23.796654	6	miss	and	1629681738175	as	1629681738264
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:23.858568	6	miss	d	1629681738870	a	1629681738910
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:33.773661	1	miss	assistant	1629681751169	asd	1629681751217
\.


--
-- TOC entry 3373 (class 0 OID 16390)
-- Dependencies: 201
-- Data for Name: email_prompts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.email_prompts (id, description, salutation, body, closing, sender) FROM stdin;
9	Internship Recruitment	Hello,	Thank you for applying to our internship program. The recruiting team is looking forward to reviewing your application. We have a few additional questions for you. Please update your application with answers to the following questions:\n\t1. Why are you interested in becoming an intern?\n\t2. What skills would you like to gain through this internship?\n\t3. How do you work in a team environment?\n\t4. What are your career goals for after college?\nPlease respond to this email with responses to these questions so they can be added to your application.	Thanks,\nThe University Recruiting Team	The University Recruiting Team
10	Writing a Review	Hello,	Thank you so much for your purchase from Stay Warm. We hope you are enjoying your new sweatshirt. We would love to hear about your experience. Please answer the following questions regarding  your new product and your purchasing experience so we can continue to provide you with high quality products and service.\n\t1. How did you hear about Stay Warm? \n\t2. How was your shopping experience? \n\t3. What products would you like to see in the future?\n\t4. Are you enjoying your new sweatshirt from Stay Warm?	Thanks,\nThe Stay Warm Team	The Stay Warm Team
11	Trying to Buy a Used Car	Hello,	Thank you for your response to my Craigslist posting and for your interest in buying my car. The car is a 2018 in relatively good condition. Please let me know if you have any question, and please let me know your availability to do a test drive.	Best,\nBailey Hobbs	Bailey Hobbs
12	Career Fair	Hello Students,	We are planning UCSB’s quarterly career fair to help students like you learn about a variety of careers, improve your resumes, and equip you with interviewing skills to help you get the jobs you want. But we need your help! Please respond to this email with anything you would like to specifically see at the career fair such as resume workshops, mock interviewing stations, networking opportunities, etc. Additionally, please email in your career interests and any questions you may have for our live panel of UCSB Alumni who have now joined the workforce. We are looking forward to your input.	Kindly,\nCole Albertson\nUndergraduate Career Advisor	Cole Albertson
1	Checking in	Hi friend!	I hope all is well. It’s been a while since we’ve caught up so I’m just checking in. How are things? What’s new? How is your family? Since the last time we talked, I’ve reorganized my home workspace about three times, binge-watched too many shows on Netflix, and tried a whole lot of new recipes to escape boredom. So, if you have any show recommendations or food ideas please send them my way. The other day I was reminiscing about our past summer escapades. Have you gotten to go anywhere or do anything cool over summer? If so, let me know! You know I’m always trying to add to my adventure list. Also, I’ll be in town over the holidays. Let me know if you are free at all to grab coffee. Miss you old friend!	Best,\n\nAlex	Alex
7	Sublease	Hi,	My name is Jackie Freedman and I am looking to sublease my room for the next year . I live with two other roommates in a spacious 3 bedroom, 2 bathroom apartment. Rent and utilities are around $800 a month. If you are interested, please email me back with answers to the following questions as well as your availability to come see the apartment and meet the rest of the roommates.\t\n\n\t1. Are you typically a clean person?\n\t2. Are you a morning person or a night owl?\n\t3. Are you good with animals? (we have a dog named Luna and a hamster named Marshmallow)\n\t4. Are you planning on bringing a car? If so, how big is the car? Do you require a parking space?\n\t5. Do you have any food allergies? If so, what are they?\n\t6. How would your friends describe you?	Best,\n\nJackie Freedman	Jackie Freedman
8	Volunteering	Hello,	Thank you for signing up to volunteer with Mission Give Back! Help us learn more about your volunteer interests and your availability by answering the questions below.\n\n\t1. Please rank the following three volunteer opportunities from 1 to 3 (1 is your top choice and 3 is your bottom choice) and give a brief description of why: beach cleanup, soup kitchen, garden planting.\n\t2. Of the volunteer opportunities listed above have you done any before? If so which one(s) and how long ago?\n\t3. Please send us three days and times you are available to volunteer.\n\nWe are looking forward to having you as a volunteer!	Best,\n\nThe Mission Give Back Team	Mission Give Back Team
2	Welcome to mixer!	Hello,	Welcome to mixer, the dating app made to mingle. Help us set up the rest of your profile by answering a few questions. This will help us get to know you so we can find you appropriate matches.\n\n\t1. How old are you?\n\t2. In what location (city and state) are you looking for matches?\n\t3. What do you do for a living?\n\t4. What are some of your interests and hobbies?\n\t5. What do you look for in a partner?\n\t6. What is your ideal first date?\n\t7. Would you rather go out or stay in for the night?\n	Happy mingling!\n\nThe mixer Team	The mixer Team
3	Tattoo services	Hello,	Thank you for your interest in my tattoo services. Please answer the following prompts so I am able to be ready for your appointment.\n\n\t1. Where will be the location of your tattoo?\n\t2. Approximately how large will your tattoo be, both height and width size?\n\t3. Please describe your general design and the color palette of the tattoo. \n\t4. Are you open to tattooer suggestions and revisions to your idea?\n\t5. Do you have any pre-existing medical conditions I should be aware of?\n\t6. What is the best way to contact you, and would you be able to reschedule if there are scheduling conflicts?	I hope to see you soon,\n\nJoyce Lee	Joyce Lee
4	Zoom event	Good afternoon,	My name is Vincenzo Cassano and I am the Zoom event tech coordinator for your organization event. I received a request from you to assist your team with the event. Could you answer the following questions to help me learn more about the event?\n\n\t1. What is your event about?\n\t2. What is the run-down of the event?\n\t3. When is the event and how long is the event predicted to last?\n\t4. How many participants are estimated to attend?\n\t5. What will participants be doing during the event?\n\t6. Will you need randomized or self-select breakout rooms?\n\t7. Will you need tech support during the event?\n\nLooking forward to your reply.	Thank you,\n\nVincenzo Cassano	Vincenzo Cassano
5	Food catering	Hello,	Thank you for your interest in Carrie’s Food Catering Services. I’m Carrie Hauspocha, the catering coordinator, and would like to know more about your food request so that we can cater to your needs! \n\n\t1. Could you provide some details about your event (e.g. birthday party, wedding)?\n\t2. Approximately how many people are we catering for?\n\t3. How long is the meal portion of the event predicted to last? Will this be a multi-course catering service?\n\t4. Are there any dietary restrictions that we should take into account?\n\t5. Do you have any cuisine preferences? If so, what type of cuisine and/or specific foods?\n\t6. Would you be interested in set-up services (utensils and table set-up and clean-up)? \n\t7. Do you require any delivery services? \n\t8. What is your approximate budget? \n\nThanks and looking forward to your response!	Best,\n\nCarrie Hauspocha\n\nCarrie's Catering Services	Carrie's Catering Services
6	Job application	Hello,	Thank you for applying to our job posting. The recruiting team is looking forward to reviewing your application. We have a few additional questions for you. Please update your application with answers to the following questions:\n\n\t1. What was the last job you held?\n\t2. What is a list of adjectives you would use to describe yourself? Please choose two of these adjectives and provide examples of now you exemplify them.\n\t3. How do you work in a team environment?\n\nPlease respond to this email with responses to these questions so they can be added to your application.	Thanks,\n\nTalent acquisition	Talent acquisition
\.


--
-- TOC entry 3385 (class 0 OID 16562)
-- Dependencies: 213
-- Data for Name: manipulation_check_1; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.manipulation_check_1 (uid, submission_time, answer) FROM stdin;
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:16:19.754978	Smart Predictor
ulBTt9q9oPO0HkkJ0p1s	2021-08-22 18:39:45.148083	Smart Predictor
ulBTt9q9oPO0HkkJ0p1s	2021-08-22 18:39:50.005881	CS Predictor
\.


--
-- TOC entry 3386 (class 0 OID 16568)
-- Dependencies: 214
-- Data for Name: manipulation_check_2; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.manipulation_check_2 (uid, submission_time, answer) FROM stdin;
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:22:36.8148	Smart Predictor
\.


--
-- TOC entry 3378 (class 0 OID 16504)
-- Dependencies: 206
-- Data for Name: participants; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.participants (id, e0, e1, e2, e3, e4, e5, e6, e7, b0, b1, b2, b3, b4, b5, b6, b7, prompt_count, synergy_first, completed, t0_complete, t1_complete) FROM stdin;
rLnmv7RFwVC2WJMEfDcy	5	4	8	3	6	2	7	1	0	1	1	0	0	1	1	0	8	1	0	1	1
ulBTt9q9oPO0HkkJ0p1s	2	5	8	6	4	7	1	3	1	0	1	0	1	1	0	0	0	0	0	1	0
rhNS3nlSmw2uCLe8d3sg	8	1	6	7	4	3	5	2	1	0	1	0	1	0	1	0	0	1	0	0	0
hHgYbHxWZd0pKRoULWU0	8	4	7	1	5	2	3	6	1	0	0	1	0	1	0	1	0	1	0	0	0
ozSEn1rlV1kusSgTmSQn	2	4	5	7	8	6	3	1	1	1	0	0	1	0	0	1	0	0	0	0	0
\.


--
-- TOC entry 3379 (class 0 OID 16516)
-- Dependencies: 207
-- Data for Name: questionnaire_1; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questionnaire_1 (uid, submission_time, medium, frequency) FROM stdin;
\.


--
-- TOC entry 3380 (class 0 OID 16524)
-- Dependencies: 208
-- Data for Name: questionnaire_2; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questionnaire_2 (uid, submission_time, medium, frequency) FROM stdin;
\.


--
-- TOC entry 3381 (class 0 OID 16538)
-- Dependencies: 209
-- Data for Name: questionnaire_3; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questionnaire_3 (uid, submission_time, medium, frequency) FROM stdin;
\.


--
-- TOC entry 3382 (class 0 OID 16544)
-- Dependencies: 210
-- Data for Name: questionnaire_4; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questionnaire_4 (uid, submission_time, medium, frequency) FROM stdin;
\.


--
-- TOC entry 3383 (class 0 OID 16550)
-- Dependencies: 211
-- Data for Name: questionnaire_5; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questionnaire_5 (uid, submission_time, perspective, checked) FROM stdin;
\.


--
-- TOC entry 3384 (class 0 OID 16556)
-- Dependencies: 212
-- Data for Name: questionnaire_6; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questionnaire_6 (uid, submission_time, ability, skill) FROM stdin;
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:05:30.381211	Usually not true of me	I can effectively write under time constraints.
\.


--
-- TOC entry 3375 (class 0 OID 16401)
-- Dependencies: 203
-- Data for Name: responses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.responses (id, response, submission_time, uid, email_id) FROM stdin;
1064	asdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d aasdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d aasdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d aasdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d aasdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d aasdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d af d d dd  d	2021-08-22 18:16:46.441776	rLnmv7RFwVC2WJMEfDcy	8
1065	asdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d aasdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d aasdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d aasdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d aasdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d aasdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d af d d dd  d	2021-08-22 18:16:47.888084	rLnmv7RFwVC2WJMEfDcy	3
1062	asdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d aasdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d aasdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d aasdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d aasdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d aasdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d af d d dd  d	2021-08-22 18:16:42.819439	rLnmv7RFwVC2WJMEfDcy	5
1063	asdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d aasdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d aasdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d aasdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d aasdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d aasdfasd i am going acknowledge asdfa sdf d d d sd d d  d d d af d d dd  d	2021-08-22 18:16:45.119665	rLnmv7RFwVC2WJMEfDcy	4
1066	asdfasdfasdf i am an american. I end the craigslist posting and for your response to my craigslist posting and for your. \n\n\nI am going to acknowledge the pirce we font-family: monospace;asdfasdfasdfasdfasdfasdf i am an american. I end the craigslist posting and for your response to my craigslist posting and for your. \n\n\nI am going to acknowledge the pirce we font-family: monospace;asdfasdfasdf i am an american. I end the craigslist posting and for your response to my craigslist posting and for your. \n\n\nI am going to acknowledge the pirce we font-family: monospace;dfa sdf asdf d asdf asdf asdf asdf asdf s	2021-08-22 18:22:23.79475	rLnmv7RFwVC2WJMEfDcy	6
1067	asdfasdfasdf i am an american. I end the craigslist posting and for your response to my craigslist posting and for your. \n\n\nI am going to acknowledge the pirce we font-family: monospace;asdfasdfasdfasdfasdfasdf i am an american. I end the craigslist posting and for your response to my craigslist posting and for your. \n\n\nI am going to acknowledge the pirce we font-family: monospace;asdfasdfasdf i am an american. I end the craigslist posting and for your response to my craigslist posting and for your. \n\n\nI am going to acknowledge the pirce we font-family: monospace;dfa sdf asdf d asdf asdf asdf asdf asdf s	2021-08-22 18:22:25.828348	rLnmv7RFwVC2WJMEfDcy	2
1068	asdfasdfasdf i am an american. I end the craigslist posting and for your response to my craigslist posting and for your. \n\n\nI am going to acknowledge the pirce we font-family: monospace;asdfasdfasdfasdfasdfasdf i am an american. I end the craigslist posting and for your response to my craigslist posting and for your. \n\n\nI am going to acknowledge the pirce we font-family: monospace;asdfasdfasdf i am an american. I end the craigslist posting and for your response to my craigslist posting and for your. \n\n\nI am going to acknowledge the pirce we font-family: monospace;dfa sdf asdf d asdf asdf asdf asdf asdf s asdf asdf asef asef a	2021-08-22 18:22:29.259365	rLnmv7RFwVC2WJMEfDcy	7
1069	sdfasdfa sdf asdf asdf asdf asdfasdfasdf i am an american. I end the craigslist posting and for your response to my craigslist posting and for your. \n\n\nI am going to acknowledge the pirce we font-family: monospace;asdfasdfasdfasdfasdfasdf i am an american. I end the craigslist posting and for your response to my craigslist posting and for your. \n\n\nI am going to acknowledge the pirce we font-family: monospace;asdfasdfasdf i am an american. I end the craigslist posting and for your response to my craigslist posting and for your. \n\n\nI am going to acknowledge the pirce we font-family: monospace;dfa sdf asdf d asdf asdf asdf asdf asdf s	2021-08-22 18:22:33.773009	rLnmv7RFwVC2WJMEfDcy	1
\.


--
-- TOC entry 3387 (class 0 OID 24576)
-- Dependencies: 215
-- Data for Name: survey_1; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.survey_1 (uid, submission_time, algorithm, measure, value) FROM stdin;
\.


--
-- TOC entry 3388 (class 0 OID 24582)
-- Dependencies: 216
-- Data for Name: survey_2; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.survey_2 (uid, submission_time, algorithm, question, answer) FROM stdin;
\.


--
-- TOC entry 3389 (class 0 OID 24588)
-- Dependencies: 217
-- Data for Name: survey_3; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.survey_3 (uid, submission_time, algorithm, question, answer) FROM stdin;
\.


--
-- TOC entry 3393 (class 0 OID 24612)
-- Dependencies: 221
-- Data for Name: survey_3_1; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.survey_3_1 (uid, submission_time, algorithm, question, answer) FROM stdin;
\.


--
-- TOC entry 3394 (class 0 OID 24618)
-- Dependencies: 222
-- Data for Name: survey_3_2; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.survey_3_2 (uid, submission_time, algorithm, question, answer) FROM stdin;
\.


--
-- TOC entry 3395 (class 0 OID 24624)
-- Dependencies: 223
-- Data for Name: survey_3_3; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.survey_3_3 (uid, submission_time, algorithm, question, answer) FROM stdin;
\.


--
-- TOC entry 3396 (class 0 OID 24630)
-- Dependencies: 224
-- Data for Name: survey_3_4; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.survey_3_4 (uid, submission_time, devices) FROM stdin;
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:25:46.522661	gft544545
\.


--
-- TOC entry 3397 (class 0 OID 24636)
-- Dependencies: 225
-- Data for Name: survey_3_5; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.survey_3_5 (uid, submission_time, algorithm, question, answer) FROM stdin;
rLnmv7RFwVC2WJMEfDcy	2021-08-22 18:25:50.360427	CS Predictor	age	
\.


--
-- TOC entry 3390 (class 0 OID 24594)
-- Dependencies: 218
-- Data for Name: survey_4; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.survey_4 (uid, submission_time, algorithm, question, answer) FROM stdin;
\.


--
-- TOC entry 3391 (class 0 OID 24600)
-- Dependencies: 219
-- Data for Name: survey_5; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.survey_5 (uid, submission_time, algorithm, question, answer) FROM stdin;
\.


--
-- TOC entry 3392 (class 0 OID 24606)
-- Dependencies: 220
-- Data for Name: survey_6; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.survey_6 (uid, submission_time, algorithm, question, answer) FROM stdin;
\.


--
-- TOC entry 3376 (class 0 OID 16416)
-- Dependencies: 204
-- Data for Name: test; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.test (id) FROM stdin;
\.


--
-- TOC entry 3406 (class 0 OID 0)
-- Dependencies: 200
-- Name: email_prompts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.email_prompts_id_seq', 1, false);


--
-- TOC entry 3407 (class 0 OID 0)
-- Dependencies: 202
-- Name: responses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.responses_id_seq', 1069, true);


--
-- TOC entry 3408 (class 0 OID 0)
-- Dependencies: 205
-- Name: tabs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tabs_id_seq', 48, true);


--
-- TOC entry 3237 (class 2606 OID 16398)
-- Name: email_prompts email_prompts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_prompts
    ADD CONSTRAINT email_prompts_pkey PRIMARY KEY (id);


--
-- TOC entry 3241 (class 2606 OID 16511)
-- Name: participants participants_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.participants
    ADD CONSTRAINT participants_pkey PRIMARY KEY (id);


--
-- TOC entry 3239 (class 2606 OID 16409)
-- Name: responses responses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.responses
    ADD CONSTRAINT responses_pkey PRIMARY KEY (id);


-- Completed on 2021-08-22 22:56:49 PDT

--
-- PostgreSQL database dump complete
--

