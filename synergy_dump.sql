-- MySQL dump 10.13  Distrib 8.0.18, for macos10.14 (x86_64)
--
-- Host: localhost    Database: synergy
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `email_prompts`
--

DROP TABLE IF EXISTS `email_prompts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `email_prompts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` text,
  `salutation` text,
  `body` text,
  `closing` text,
  `sender` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `email_prompts`
--

LOCK TABLES `email_prompts` WRITE;
/*!40000 ALTER TABLE `email_prompts` DISABLE KEYS */;
INSERT INTO `email_prompts` VALUES (1,'Hiring a Research Assistant','Dear scholars,','Professor Adam Kim from the College of Social Sciences is looking for a research assistant that can help him with his research that spans a wide range of topics. If you are interested in this opportunity, please email Professor Adam Kim with answers to the following questions.\n\n	1. Why are you interested in doing research?\n	2. What skills or past experience do you currently possess that would be applicable to this opportunity?\n	3. What skills do you hope to gain from this experience?\n','Kind regards,\n\nBeth Davis\n\nUndergraduate Advisor\n','Beth Davis'),(2,'Joining a Club','Hello students,','Reading at UCSB is hosting its first meeting of the quarter this upcoming Thursday at 7pm. If you are interested in expanding your knowledge and engaging in deep discussions about literature, please email Professor Davis about joining. We would love to get to know you and learn more about your interest in Reading at UCSB.\n\n	1. Firstly, what type of books would you be interested in reading this quarter? Please provide one to two examples for reference.\n	2. What is your favorite book and why is it your favorite?\n	3. What are you hoping to gain from joining Reading at UCSB? (a community, exposure to literature, etc.)\n','Kindly,\n\nReading at UCSB\n','Reading at UCSB'),(3,'Seeking Help for Community Service','Hello fellow community members,','My name is Meghan O\'Connor, and I am the community service coordinator for Keep It Clean. This weekend we will be hosting a community beautification project, and we would love your help. If you are interested in this opportunity, please respond with your name, your weekend availability, your past experience doing community service, and any questions you may have about this opportunity.','Thanks,\n\nMeghan O’Connor\n\nKeep It Clean Community Service Coordinator','Meghan O’Connor'),(4,'Hiring Tutors','Hello,','Tutors SB is looking for bright college undergraduates to help tutor students grades K through 12. The job pays $15/hour, and we are looking for tutors in all subject areas. If you are interested in applying, please reply to this email with answers to the following questions.\n\n	1. What skills could you bring to this job?\n	2. What are your strongest subject areas?\n	3. What is your weekly availability?\n	4. What is your preferred age range?\n\nI am looking forward to reviewing your applications.','Kindly,\n\nDiane Frost\n\nHiring Manager \n\nTutor SB','Diane Frost'),(5,'Fall Sublease','Hi,','My name is Jackie Freedman and I am looking to sublease my spot in a double room in Isla Vista for the Fall quarter of 2021. I live with three other roommates in a spacious 2 bedroom, 2 bathroom apartment. Rent and utilities are around $800 a month. If you are interested, please email me back with answers to the following questions as well as and your availability to come see the apartment and meet the rest of the roommates.\n	1. What year are you in school?\n	2. What is your major?\n	3. Are you typically a clean person?\n	4. Are you good with animals? (we have a dog named Luna and a hamster named Marshmallow)\n	5. Are you planning on bringing a car?\n	6. Do you have any food allergies?\n	7. How would your friends describe you?','Best,\nJackie Freedman','Jackie Freedman'),(6,'College Fair','Hello Undergraduates,','My name is Kenneth Wong and I am the new career advisor at your old high school. In two weeks, we will be holding our annual College Fair that informs students about life in college, and we would love to share some real college experiences from students like you. If you are interested, please respond to this email with your name, major, campus involvement, any college experiences you would like to share, and any advice for students as they are applying to college.','Thanks!\nKenneth Wong\nCareer Advisor','Kenneth Wong'),(7,'Rec Letter','Hello,','I would be more than happy to write you a letter of recommendation for your study abroad program. However, before I do, I have a few questions for you:\n	1. What do you hope to gain from studying abroad?\n	2, How will studying abroad enrich your learning experience?\n	3. Why did you decide to study abroad?\n	4. What makes you a good candidate for this program?\n	5. Which country are you hoping to study abroad in?\n	6. Where should I email the letter of recommendation?\nThank you and good luck with your application.','Best,\nProfessor Warble','Professor Warble'),(8,'Catching Up','Hi,','I hope you are doing well. It has been a while since we got to catch up, so your uncle and I just wanted to check in and see how you are doing. How is school going and how are your classes? Are you working at all? How are your friends? Any new special someone we should know about? Do you need anything? We are looking forward to hearing from you soon!','Caringly,\nAunt Carol and Uncle Jeff','Aunt Carol'),(9,'Internship Recruitment','Hello,','Thank you for applying to our internship program. The recruiting team is looking forward to reviewing your application. We have a few additional questions for you. Please update your application with answers to the following questions:\n	1. Why are you interested in becoming an intern?\n	2. What skills would you like to gain through this internship?\n	3. How do you work in a team environment?\n	4. What are your career goals for after college?\nPlease respond to this email with responses to these questions so they can be added to your application.','Thanks,\nThe University Recruiting Team','The University Recruiting Team'),(10,'Writing a Review','Hello,','Thank you so much for your purchase from Stay Warm. We hope you are enjoying your new sweatshirt. We would love to hear about your experience. Please answer the following questions regarding  your new product and your purchasing experience so we can continue to provide you with high quality products and service.\n	1. How did you hear about Stay Warm? \n	2. How was your shopping experience? \n	3. What products would you like to see in the future?\n	4. Are you enjoying your new sweatshirt from Stay Warm?','Thanks,\nThe Stay Warm Team','The Stay Warm Team'),(11,'Trying to Buy a Used Car','Hello,','Thank you for your response to my Craigslist posting and for your interest in buying my car. The car is a 2018 in relatively good condition. Please let me know if you have any question, and please let me know your availability to do a test drive.','Best,\nBailey Hobbs','Bailey Hobbs'),(12,'Career Fair','Hello Students,','We are planning UCSB’s quarterly career fair to help students like you learn about a variety of careers, improve your resumes, and equip you with interviewing skills to help you get the jobs you want. But we need your help! Please respond to this email with anything you would like to specifically see at the career fair such as resume workshops, mock interviewing stations, networking opportunities, etc. Additionally, please email in your career interests and any questions you may have for our live panel of UCSB Alumni who have now joined the workforce. We are looking forward to your input.','Kindly,\nCole Albertson\nUndergraduate Career Advisor','Cole Albertson');
/*!40000 ALTER TABLE `email_prompts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `responses`
--

DROP TABLE IF EXISTS `responses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `responses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `response` text,
  `submission_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=140 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `responses`
--

LOCK TABLES `responses` WRITE;
/*!40000 ALTER TABLE `responses` DISABLE KEYS */;
/*!40000 ALTER TABLE `responses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_table`
--

DROP TABLE IF EXISTS `test_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test_table` (
  `col` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_table`
--

LOCK TABLES `test_table` WRITE;
/*!40000 ALTER TABLE `test_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `test_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-16 23:26:06
