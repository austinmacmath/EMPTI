--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.2

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
-- Name: email_prompts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.email_prompts_id_seq OWNED BY public.email_prompts.id;


--
-- Name: participants; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.participants (
    id integer
);


ALTER TABLE public.participants OWNER TO postgres;

--
-- Name: responses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.responses (
    id integer NOT NULL,
    response text,
    submission_time timestamp without time zone
);


ALTER TABLE public.responses OWNER TO postgres;

--
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
-- Name: responses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.responses_id_seq OWNED BY public.responses.id;


--
-- Name: test; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.test (
    id integer
);


ALTER TABLE public.test OWNER TO postgres;

--
-- Name: email_prompts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_prompts ALTER COLUMN id SET DEFAULT nextval('public.email_prompts_id_seq'::regclass);


--
-- Name: responses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.responses ALTER COLUMN id SET DEFAULT nextval('public.responses_id_seq'::regclass);


--
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
-- Data for Name: participants; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.participants (id) FROM stdin;
\.


--
-- Data for Name: responses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.responses (id, response, submission_time) FROM stdin;
\.


--
-- Data for Name: test; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.test (id) FROM stdin;
\.


--
-- Name: email_prompts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.email_prompts_id_seq', 1, false);


--
-- Name: responses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.responses_id_seq', 26, true);


--
-- Name: email_prompts email_prompts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_prompts
    ADD CONSTRAINT email_prompts_pkey PRIMARY KEY (id);


--
-- Name: responses responses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.responses
    ADD CONSTRAINT responses_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

