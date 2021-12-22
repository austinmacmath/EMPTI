--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4 (Ubuntu 13.4-4.pgdg20.04+1)
-- Dumped by pg_dump version 13.2

-- Started on 2021-10-31 21:56:07 PDT

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

--
-- TOC entry 2 (class 3079 OID 9895443)
-- Name: tablefunc; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS tablefunc WITH SCHEMA public;


--
-- TOC entry 4134 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION tablefunc; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION tablefunc IS 'functions that manipulate whole tables, including crosstab';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 201 (class 1259 OID 9808497)
-- Name: dprime; Type: TABLE; Schema: public; Owner: -
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


--
-- TOC entry 203 (class 1259 OID 9808509)
-- Name: email_prompts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.email_prompts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 202 (class 1259 OID 9808503)
-- Name: email_prompts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.email_prompts (
    id integer DEFAULT nextval('public.email_prompts_id_seq'::regclass) NOT NULL,
    description text,
    salutation text,
    body text,
    closing text,
    sender text
);


--
-- TOC entry 204 (class 1259 OID 9808511)
-- Name: manipulation_check_1; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.manipulation_check_1 (
    uid text,
    submission_time timestamp without time zone,
    answer text
);


--
-- TOC entry 205 (class 1259 OID 9808517)
-- Name: manipulation_check_2; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.manipulation_check_2 (
    uid text,
    submission_time timestamp without time zone,
    answer text
);


--
-- TOC entry 232 (class 1259 OID 9895535)
-- Name: participants; Type: TABLE; Schema: public; Owner: -
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
    t1_complete integer,
    start timestamp without time zone,
    finish timestamp without time zone
);


--
-- TOC entry 206 (class 1259 OID 9808529)
-- Name: questionnaire_1; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.questionnaire_1 (
    uid text,
    submission_time timestamp without time zone,
    medium text,
    frequency text
);


--
-- TOC entry 207 (class 1259 OID 9808535)
-- Name: questionnaire_2; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.questionnaire_2 (
    uid text,
    submission_time timestamp without time zone,
    medium text,
    frequency text
);


--
-- TOC entry 208 (class 1259 OID 9808541)
-- Name: questionnaire_3; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.questionnaire_3 (
    uid text,
    submission_time timestamp without time zone,
    medium text,
    frequency text
);


--
-- TOC entry 209 (class 1259 OID 9808547)
-- Name: questionnaire_4; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.questionnaire_4 (
    uid text,
    submission_time timestamp without time zone,
    medium text,
    frequency text
);


--
-- TOC entry 210 (class 1259 OID 9808553)
-- Name: questionnaire_5; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.questionnaire_5 (
    uid text,
    submission_time timestamp without time zone,
    perspective text,
    checked boolean
);


--
-- TOC entry 211 (class 1259 OID 9808559)
-- Name: questionnaire_6; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.questionnaire_6 (
    uid text,
    submission_time timestamp without time zone,
    ability text,
    skill text
);


--
-- TOC entry 213 (class 1259 OID 9808571)
-- Name: responses_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.responses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 212 (class 1259 OID 9808565)
-- Name: responses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.responses (
    id integer DEFAULT nextval('public.responses_id_seq'::regclass) NOT NULL,
    response text,
    submission_time timestamp without time zone,
    uid text,
    email_id integer
);


--
-- TOC entry 214 (class 1259 OID 9808573)
-- Name: survey_1; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.survey_1 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    measure text,
    value text
);


--
-- TOC entry 215 (class 1259 OID 9808579)
-- Name: survey_2; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.survey_2 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    question text,
    answer text
);


--
-- TOC entry 216 (class 1259 OID 9808585)
-- Name: survey_3; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.survey_3 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    question text,
    answer text
);


--
-- TOC entry 217 (class 1259 OID 9808591)
-- Name: survey_gen_1; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.survey_gen_1 (
    uid text,
    submission_time timestamp without time zone,
    question text,
    answer text
);


--
-- TOC entry 218 (class 1259 OID 9808597)
-- Name: survey_gen_2; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.survey_gen_2 (
    uid text,
    submission_time timestamp without time zone,
    question text,
    answer text
);


--
-- TOC entry 219 (class 1259 OID 9808603)
-- Name: survey_gen_3; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.survey_gen_3 (
    uid text,
    submission_time timestamp without time zone,
    question text,
    answer text
);


--
-- TOC entry 220 (class 1259 OID 9808609)
-- Name: survey_gen_4; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.survey_gen_4 (
    uid text,
    submission_time timestamp without time zone,
    devices text
);


--
-- TOC entry 221 (class 1259 OID 9808615)
-- Name: survey_gen_5; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.survey_gen_5 (
    uid text,
    submission_time timestamp without time zone,
    question text,
    answer text
);


--
-- TOC entry 222 (class 1259 OID 9808621)
-- Name: survey_gen_6; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.survey_gen_6 (
    uid text,
    submission_time timestamp without time zone,
    clarification text
);


--
-- TOC entry 223 (class 1259 OID 9808627)
-- Name: survey_gen_7; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.survey_gen_7 (
    uid text,
    submission_time timestamp without time zone,
    question text,
    answer text
);


--
-- TOC entry 224 (class 1259 OID 9808633)
-- Name: survey_4; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.survey_4 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    question text,
    answer text
);


--
-- TOC entry 225 (class 1259 OID 9808639)
-- Name: survey_5; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.survey_5 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    question text,
    answer text
);


--
-- TOC entry 226 (class 1259 OID 9808645)
-- Name: survey_6; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.survey_6 (
    uid text,
    submission_time timestamp without time zone,
    algorithm text,
    question text,
    answer text
);


--
-- TOC entry 233 (class 1259 OID 9895547)
-- Name: synergy_condition; Type: VIEW; Schema: public; Owner: -
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


--
-- TOC entry 227 (class 1259 OID 9808655)
-- Name: tabs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tabs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


--
-- TOC entry 228 (class 1259 OID 9808657)
-- Name: test; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.test (
    id integer
);

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
