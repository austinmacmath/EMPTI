--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4 (Ubuntu 13.4-1.pgdg20.04+1)
-- Dumped by pg_dump version 13.2

-- Started on 2021-10-14 22:59:30 PDT

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
-- TOC entry 200 (class 1259 OID 9808497)
-- Name: dprime; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
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


ALTER TABLE public.dprime OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 202 (class 1259 OID 9808509)
-- Name: email_prompts_id_seq; Type: SEQUENCE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE SEQUENCE public.email_prompts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.email_prompts_id_seq OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 201 (class 1259 OID 9808503)
-- Name: email_prompts; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.email_prompts (
    id integer DEFAULT nextval('public.email_prompts_id_seq'::regclass) NOT NULL,
    description text,
    salutation text,
    body text,
    closing text,
    sender text
);


ALTER TABLE public.email_prompts OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 203 (class 1259 OID 9808511)
-- Name: manipulation_check_1; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.manipulation_check_1 (
    uid text,
    submission_time timestamp without time zone,
    answer text
);


ALTER TABLE public.manipulation_check_1 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 204 (class 1259 OID 9808517)
-- Name: manipulation_check_2; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.manipulation_check_2 (
    uid text,
    submission_time timestamp without time zone,
    answer text
);


ALTER TABLE public.manipulation_check_2 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 205 (class 1259 OID 9808523)
-- Name: participants; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
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


ALTER TABLE public.participants OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 206 (class 1259 OID 9808529)
-- Name: questionnaire_1; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.questionnaire_1 (
    uid text,
    submission_time timestamp without time zone,
    medium text,
    frequency text
);


ALTER TABLE public.questionnaire_1 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 207 (class 1259 OID 9808535)
-- Name: questionnaire_2; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.questionnaire_2 (
    uid text,
    submission_time timestamp without time zone,
    medium text,
    frequency text
);


ALTER TABLE public.questionnaire_2 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 208 (class 1259 OID 9808541)
-- Name: questionnaire_3; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.questionnaire_3 (
    uid text,
    submission_time timestamp without time zone,
    medium text,
    frequency text
);


ALTER TABLE public.questionnaire_3 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 209 (class 1259 OID 9808547)
-- Name: questionnaire_4; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.questionnaire_4 (
    uid text,
    submission_time timestamp without time zone,
    medium text,
    frequency text
);


ALTER TABLE public.questionnaire_4 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 210 (class 1259 OID 9808553)
-- Name: questionnaire_5; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.questionnaire_5 (
    uid text,
    submission_time timestamp without time zone,
    perspective text,
    checked boolean
);


ALTER TABLE public.questionnaire_5 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 211 (class 1259 OID 9808559)
-- Name: questionnaire_6; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.questionnaire_6 (
    uid text,
    submission_time timestamp without time zone,
    ability text,
    skill text
);


ALTER TABLE public.questionnaire_6 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 213 (class 1259 OID 9808571)
-- Name: responses_id_seq; Type: SEQUENCE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE SEQUENCE public.responses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.responses_id_seq OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 212 (class 1259 OID 9808565)
-- Name: responses; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.responses (
    id integer DEFAULT nextval('public.responses_id_seq'::regclass) NOT NULL,
    response text,
    submission_time timestamp without time zone,
    uid text,
    email_id integer
);


ALTER TABLE public.responses OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 214 (class 1259 OID 9808573)
-- Name: survey_1; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.survey_1 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    measure text,
    value text
);


ALTER TABLE public.survey_1 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 215 (class 1259 OID 9808579)
-- Name: survey_2; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.survey_2 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    question text,
    answer text
);


ALTER TABLE public.survey_2 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 216 (class 1259 OID 9808585)
-- Name: survey_3; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.survey_3 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    question text,
    answer text
);


ALTER TABLE public.survey_3 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 217 (class 1259 OID 9808591)
-- Name: survey_3_1; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.survey_3_1 (
    uid text,
    submission_time timestamp without time zone,
    question text,
    answer text
);


ALTER TABLE public.survey_3_1 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 218 (class 1259 OID 9808597)
-- Name: survey_3_2; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.survey_3_2 (
    uid text,
    submission_time timestamp without time zone,
    question text,
    answer text
);


ALTER TABLE public.survey_3_2 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 219 (class 1259 OID 9808603)
-- Name: survey_3_3; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.survey_3_3 (
    uid text,
    submission_time timestamp without time zone,
    question text,
    answer text
);


ALTER TABLE public.survey_3_3 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 220 (class 1259 OID 9808609)
-- Name: survey_3_4; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.survey_3_4 (
    uid text,
    submission_time timestamp without time zone,
    devices text
);


ALTER TABLE public.survey_3_4 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 221 (class 1259 OID 9808615)
-- Name: survey_3_4_5; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.survey_3_4_5 (
    uid text,
    submission_time timestamp without time zone,
    question text,
    answer text
);


ALTER TABLE public.survey_3_4_5 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 222 (class 1259 OID 9808621)
-- Name: survey_3_4_5_6; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.survey_3_4_5_6 (
    uid text,
    submission_time timestamp without time zone,
    clarification text
);


ALTER TABLE public.survey_3_4_5_6 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 223 (class 1259 OID 9808627)
-- Name: survey_3_5; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.survey_3_5 (
    uid text,
    submission_time timestamp without time zone,
    question text,
    answer text
);


ALTER TABLE public.survey_3_5 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 224 (class 1259 OID 9808633)
-- Name: survey_4; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.survey_4 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    question text,
    answer text
);


ALTER TABLE public.survey_4 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 225 (class 1259 OID 9808639)
-- Name: survey_5; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.survey_5 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    question text,
    answer text
);


ALTER TABLE public.survey_5 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 226 (class 1259 OID 9808645)
-- Name: survey_6; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.survey_6 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    question text,
    answer text
);


ALTER TABLE public.survey_6 OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 227 (class 1259 OID 9808651)
-- Name: synergy_condition; Type: VIEW; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE VIEW public.synergy_condition AS
 SELECT participants.id,
    ((participants.synergy_first - (2 * participants.synergy_first)) * '-1'::integer) AS s0,
    ((participants.synergy_first - (2 * participants.synergy_first)) * '-1'::integer) AS s1,
    ((participants.synergy_first - (2 * participants.synergy_first)) * '-1'::integer) AS s2,
    ((participants.synergy_first - (2 * participants.synergy_first)) * '-1'::integer) AS s3,
    ((participants.synergy_first + 1) - (2 * participants.synergy_first)) AS s4,
    ((participants.synergy_first + 1) - (2 * participants.synergy_first)) AS s5,
    ((participants.synergy_first + 1) - (2 * participants.synergy_first)) AS s6,
    ((participants.synergy_first + 1) - (2 * participants.synergy_first)) AS s7
   FROM public.participants;


ALTER TABLE public.synergy_condition OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 228 (class 1259 OID 9808655)
-- Name: tabs_id_seq; Type: SEQUENCE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE SEQUENCE public.tabs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public.tabs_id_seq OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 229 (class 1259 OID 9808657)
-- Name: test; Type: TABLE; Schema: public; Owner: pdczbyxiumdzxw
--

CREATE TABLE public.test (
    id integer
);


ALTER TABLE public.test OWNER TO pdczbyxiumdzxw;

--
-- TOC entry 4103 (class 0 OID 9808497)
-- Dependencies: 200
-- Data for Name: dprime; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.dprime (uid, submission_time, email_id, code, suggestion, suggestion_time, root, tab_time) FROM stdin;
\.


--
-- TOC entry 4104 (class 0 OID 9808503)
-- Dependencies: 201
-- Data for Name: email_prompts; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.email_prompts (id, description, salutation, body, closing, sender) FROM stdin;
1	Checking in	Hi friend!	I hope all is well. It’s been a while since we’ve caught up so I’m just checking in. How are things? What’s new? How is your family? Since the last time we talked, I’ve reorganized my home workspace about three times, binge-watched too many shows on Netflix, and tried a whole lot of new recipes to escape boredom. So, if you have any show recommendations or food ideas please send them my way. The other day I was reminiscing about our past summer escapades. Have you gotten to go anywhere or do anything cool over summer? If so, let me know! You know I’m always trying to add to my adventure list. Also, I’ll be in town over the holidays. Let me know if you are free at all to grab coffee. Miss you old friend!	Best,\n\nAlex	Alex
2	Welcome to Mixer!	Hello,	Welcome to Mixer, the dating app made to mingle. Help us set up the rest of your profile by answering a few questions. This will help us get to know you so we can find you appropriate matches.\n\n\t1. How old are you?\n\t2. In what location (city and state) are you looking for matches?\n\t3. What do you do for a living?\n\t4. What are some of your interests and hobbies?\n\t5. What do you look for in a partner?\n\t6. What is your ideal first date?\n\t7. Would you rather go out or stay in for the night?\n	Happy mingling!\n\nThe Mixer Team	The Mixer Team
3	Tattoo services	Hello,	Thank you for your interest in my tattoo services. Please answer the following prompts so I am able to be ready for your appointment.\n\n\t1. Where will be the location of your tattoo?\n\t2. Approximately how large will your tattoo be, both height and width size?\n\t3. Please describe your general design and the color palette of the tattoo. \n\t4. Are you open to tattooer suggestions and revisions to your idea?\n\t5. Do you have any pre-existing medical conditions I should be aware of?\n\t6. What is the best way to contact you, and would you be able to reschedule if there are scheduling conflicts?	I hope to see you soon,\n\nJoyce Lee	Joyce Lee
4	Zoom event	Good afternoon,	My name is Vincenzo Cassano and I am the Zoom event tech coordinator for your organization. I received a request from you to assist your team with the event. Could you answer the following questions to help me learn more about the event?\n\n\t1. What is your event about?\n\t2. What is the run-down of the event?\n\t3. When is the event and how long is the event predicted to last?\n\t4. How many participants are estimated to attend?\n\t5. What will participants be doing during the event?\n\t6. Will you need randomized or self-select breakout rooms?\n\t7. Will you need tech support during the event?\n\nLooking forward to your reply.	Thank you,\n\nVincenzo Cassano	Vincenzo Cassano
5	Food catering	Hello,	Thank you for your interest in Carrie’s Food Catering Services. I’m Carrie Hauspocha, the catering coordinator, and would like to know more about your food request so that we can cater to your needs! \n\n\t1. Could you provide some details about your event (e.g. birthday party, wedding)?\n\t2. Approximately how many people are we catering for?\n\t3. How long is the meal portion of the event predicted to last? Will this be a multi-course catering service?\n\t4. Are there any dietary restrictions that we should take into account?\n\t5. Do you have any cuisine preferences? If so, what type of cuisine and/or specific foods?\n\t6. Would you be interested in set-up services (utensils and table set-up and clean-up)? \n\t7. Do you require any delivery services? \n\t8. What is your approximate budget? \n\nThanks and looking forward to your response!	Best,\n\nCarrie Hauspocha\n\nCarrie's Catering Services	Carrie's Catering Services
6	Job application	Hello,	Thank you for applying to our job posting. The recruiting team is looking forward to reviewing your application. We have a few additional questions for you. Please update your application with answers to the following questions:\n\n\t1. What was the last job you held?\n\t2. What is a list of adjectives you would use to describe yourself? Please choose two of these adjectives and provide examples of how you exemplify them.\n\t3. How do you work in a team environment?\n\nPlease respond to this email with responses to these questions so they can be added to your application.	Thanks,\n\nTalent Acquisition	Talent Acquisition
7	Sublease	Hi,	My name is Jackie Freedman and I am looking to sublease my room for the next year. I live with two other roommates in a spacious 3 bedroom, 2 bathroom apartment. Rent and utilities are around $800 a month. If you are interested, please email me back with answers to the following questions as well as your availability to come see the apartment and meet the rest of the roommates.\t\n\n\t1. Are you typically a clean person?\n\t2. Are you a morning person or a night owl?\n\t3. Are you good with animals? (we have a dog named Luna and a hamster named Marshmallow)\n\t4. Are you planning on bringing a car? If so, how big is the car? Do you require a parking space?\n\t5. Do you have any food allergies? If so, what are they?\n\t6. How would your friends describe you?	Best,\n\nJackie Freedman	Jackie Freedman
8	Volunteering	Hello,	Thank you for signing up to volunteer with Mission Give Back! Help us learn more about your volunteer interests and your availability by answering the questions below.\n\n\t1. Please rank the following three volunteer opportunities from 1 to 3 (1 is your top choice and 3 is your bottom choice) and give a brief description of why: beach cleanup, soup kitchen, garden planting.\n\t2. Of the volunteer opportunities listed above have you done any before? If so, which one(s) and how long ago?\n\t3. Please send us three days and times you are available to volunteer.\n\nWe are looking forward to having you as a volunteer!	Best,\n\nThe Mission Give Back Team	Mission Give Back Team
9	Internship Recruitment	Hello,	Thank you for applying to our internship program. The recruiting team is looking forward to reviewing your application. We have a few additional questions for you. Please update your application with answers to the following questions:\n\t1. Why are you interested in becoming an intern?\n\t2. What skills would you like to gain through this internship?\n\t3. How do you work in a team environment?\n\t4. What are your career goals for after college?\nPlease respond to this email with responses to these questions so they can be added to your application.	Thanks,\nThe University Recruiting Team	The University Recruiting Team
10	Writing a Review	Hello,	Thank you so much for your purchase from Stay Warm. We hope you are enjoying your new sweatshirt. We would love to hear about your experience. Please answer the following questions regarding  your new product and your purchasing experience so we can continue to provide you with high quality products and service.\n\t1. How did you hear about Stay Warm? \n\t2. How was your shopping experience? \n\t3. What products would you like to see in the future?\n\t4. Are you enjoying your new sweatshirt from Stay Warm?	Thanks,\nThe Stay Warm Team	The Stay Warm Team
11	Trying to Buy a Used Car	Hello,	Thank you for your response to my Craigslist posting and for your interest in buying my car. The car is a 2018 in relatively good condition. Please let me know if you have any question, and please let me know your availability to do a test drive.	Best,\nBailey Hobbs	Bailey Hobbs
12	Career Fair	Hello Students,	We are planning UCSB’s quarterly career fair to help students like you learn about a variety of careers, improve your resumes, and equip you with interviewing skills to help you get the jobs you want. But we need your help! Please respond to this email with anything you would like to specifically see at the career fair such as resume workshops, mock interviewing stations, networking opportunities, etc. Additionally, please email in your career interests and any questions you may have for our live panel of UCSB Alumni who have now joined the workforce. We are looking forward to your input.	Kindly,\nCole Albertson\nUndergraduate Career Advisor	Cole Albertson
\.


--
-- TOC entry 4106 (class 0 OID 9808511)
-- Dependencies: 203
-- Data for Name: manipulation_check_1; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.manipulation_check_1 (uid, submission_time, answer) FROM stdin;
\.


--
-- TOC entry 4107 (class 0 OID 9808517)
-- Dependencies: 204
-- Data for Name: manipulation_check_2; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.manipulation_check_2 (uid, submission_time, answer) FROM stdin;
\.


--
-- TOC entry 4108 (class 0 OID 9808523)
-- Dependencies: 205
-- Data for Name: participants; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.participants (id, e0, e1, e2, e3, e4, e5, e6, e7, b0, b1, b2, b3, b4, b5, b6, b7, prompt_count, synergy_first, completed, t0_complete, t1_complete) FROM stdin;
na7aFgKPstfrUJQjEsTl	5	1	6	2	7	8	3	4	1	0	1	0	1	0	1	0	0	0	0	0	0
kLZqWdsoC3QZebQ8P4CH	8	3	7	2	4	1	6	5	0	0	1	1	0	1	1	0	0	1	0	1	1
LL4NLv2uMvpfbo1RFyBP	8	7	4	1	6	2	3	5	0	0	1	1	0	1	0	1	0	0	0	0	0
SBEu4umlkFOTZkozm9ER	4	3	1	7	8	6	2	5	0	0	1	1	1	0	0	1	3	1	0	0	1
\.


--
-- TOC entry 4109 (class 0 OID 9808529)
-- Dependencies: 206
-- Data for Name: questionnaire_1; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.questionnaire_1 (uid, submission_time, medium, frequency) FROM stdin;
\.


--
-- TOC entry 4110 (class 0 OID 9808535)
-- Dependencies: 207
-- Data for Name: questionnaire_2; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.questionnaire_2 (uid, submission_time, medium, frequency) FROM stdin;
\.


--
-- TOC entry 4111 (class 0 OID 9808541)
-- Dependencies: 208
-- Data for Name: questionnaire_3; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.questionnaire_3 (uid, submission_time, medium, frequency) FROM stdin;
\.


--
-- TOC entry 4112 (class 0 OID 9808547)
-- Dependencies: 209
-- Data for Name: questionnaire_4; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.questionnaire_4 (uid, submission_time, medium, frequency) FROM stdin;
\.


--
-- TOC entry 4113 (class 0 OID 9808553)
-- Dependencies: 210
-- Data for Name: questionnaire_5; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.questionnaire_5 (uid, submission_time, perspective, checked) FROM stdin;
\.


--
-- TOC entry 4114 (class 0 OID 9808559)
-- Dependencies: 211
-- Data for Name: questionnaire_6; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.questionnaire_6 (uid, submission_time, ability, skill) FROM stdin;
\.


--
-- TOC entry 4115 (class 0 OID 9808565)
-- Dependencies: 212
-- Data for Name: responses; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.responses (id, response, submission_time, uid, email_id) FROM stdin;
\.


--
-- TOC entry 4117 (class 0 OID 9808573)
-- Dependencies: 214
-- Data for Name: survey_1; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.survey_1 (uid, submission_time, algorithm, measure, value) FROM stdin;
\.


--
-- TOC entry 4118 (class 0 OID 9808579)
-- Dependencies: 215
-- Data for Name: survey_2; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.survey_2 (uid, submission_time, algorithm, question, answer) FROM stdin;
\.


--
-- TOC entry 4119 (class 0 OID 9808585)
-- Dependencies: 216
-- Data for Name: survey_3; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.survey_3 (uid, submission_time, algorithm, question, answer) FROM stdin;
\.


--
-- TOC entry 4120 (class 0 OID 9808591)
-- Dependencies: 217
-- Data for Name: survey_3_1; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.survey_3_1 (uid, submission_time, question, answer) FROM stdin;
\.


--
-- TOC entry 4121 (class 0 OID 9808597)
-- Dependencies: 218
-- Data for Name: survey_3_2; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.survey_3_2 (uid, submission_time, question, answer) FROM stdin;
\.


--
-- TOC entry 4122 (class 0 OID 9808603)
-- Dependencies: 219
-- Data for Name: survey_3_3; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.survey_3_3 (uid, submission_time, question, answer) FROM stdin;
\.


--
-- TOC entry 4123 (class 0 OID 9808609)
-- Dependencies: 220
-- Data for Name: survey_3_4; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.survey_3_4 (uid, submission_time, devices) FROM stdin;
\.


--
-- TOC entry 4124 (class 0 OID 9808615)
-- Dependencies: 221
-- Data for Name: survey_3_4_5; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.survey_3_4_5 (uid, submission_time, question, answer) FROM stdin;
\.


--
-- TOC entry 4125 (class 0 OID 9808621)
-- Dependencies: 222
-- Data for Name: survey_3_4_5_6; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.survey_3_4_5_6 (uid, submission_time, clarification) FROM stdin;
\.


--
-- TOC entry 4126 (class 0 OID 9808627)
-- Dependencies: 223
-- Data for Name: survey_3_5; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.survey_3_5 (uid, submission_time, question, answer) FROM stdin;
\.


--
-- TOC entry 4127 (class 0 OID 9808633)
-- Dependencies: 224
-- Data for Name: survey_4; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.survey_4 (uid, submission_time, algorithm, question, answer) FROM stdin;
\.


--
-- TOC entry 4128 (class 0 OID 9808639)
-- Dependencies: 225
-- Data for Name: survey_5; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.survey_5 (uid, submission_time, algorithm, question, answer) FROM stdin;
\.


--
-- TOC entry 4129 (class 0 OID 9808645)
-- Dependencies: 226
-- Data for Name: survey_6; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.survey_6 (uid, submission_time, algorithm, question, answer) FROM stdin;
\.


--
-- TOC entry 4131 (class 0 OID 9808657)
-- Dependencies: 229
-- Data for Name: test; Type: TABLE DATA; Schema: public; Owner: pdczbyxiumdzxw
--

COPY public.test (id) FROM stdin;
\.


--
-- TOC entry 4139 (class 0 OID 0)
-- Dependencies: 202
-- Name: email_prompts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pdczbyxiumdzxw
--

SELECT pg_catalog.setval('public.email_prompts_id_seq', 1, false);


--
-- TOC entry 4140 (class 0 OID 0)
-- Dependencies: 213
-- Name: responses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pdczbyxiumdzxw
--

SELECT pg_catalog.setval('public.responses_id_seq', 3, true);


--
-- TOC entry 4141 (class 0 OID 0)
-- Dependencies: 228
-- Name: tabs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pdczbyxiumdzxw
--

SELECT pg_catalog.setval('public.tabs_id_seq', 1, false);


--
-- TOC entry 4137 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: pdczbyxiumdzxw
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO pdczbyxiumdzxw;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- TOC entry 4138 (class 0 OID 0)
-- Dependencies: 761
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO pdczbyxiumdzxw;


-- Completed on 2021-10-14 22:59:48 PDT

--
-- PostgreSQL database dump complete
--

