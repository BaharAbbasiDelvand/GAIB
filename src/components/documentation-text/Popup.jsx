import React from "react";
import './popup.css';

const Popup = () => {
    return(
        <div>
            <li><strong>TestCaseGenerator:</strong> The module TestCaseGenerator is designed to create and maintain test suites. With the help of OpenAI's GPT-3.5 or GPT-4 models, it can work with both newly written code and modifications captured in a git diff. The module also contains functions to identify and correct errors within existing test cases, create assertions for specific functions, improve the coverage of test suites, and generate equivalence partitioning for test inputs. </li>
            <li><strong>CodeSplit:</strong> This module CodeSplit is designed to parse and analyze source code files for the purpose of testing, and interfacing with a MongoDB database. It parses Python code files to identify functions, maps assertions within test suites to their corresponding functions, inserts detailed code module information into a MongoDB database, manages library dependencies, records test cases and associates them with function names and developer IDs. It ensures that software tests are organized, trackable, and maintainable.</li>
            <li><strong>CoverageMeasurement:</strong>This module CoverageMeasurement is designed to provide code quality checks and test coverage analysis, using two well-known tools: Pytest and Pylint. It runs the tests, generates a coverage report, and then parses the report to extract the total coverage percentage. It also performs static code analysis, and parses the output to extract the code rating out of 10, which indicates the quality of the code based on Pylint’s linting rules.</li>
            <li><strong>DiffParser:</strong>The module DiffParser is designed to receive and process code changes from a GitHub repository. It prompts the user for their GitHub repository URL and access token, listens for webhook notifications of commits to the repository, parses the commit messages and code changes, and potentially prepares them for further analysis or processing. The purpose is to facilitate continuous integration/continuous deployment (CI/CD) workflows. </li>
            <li><strong>ExecutionEngine:</strong>The module ExecutionEngine is designed to automate the testing process. With Pytest, the module fetches generated test suites from TestCaseGenerator, handles error corrections and code cleanup, and eventually executes test suites and analyzes results. It also provides functions for improving test accuracy: By comparing new test results with previous runs, it identifies newly passed or failed assertions, providing insights into how code changes affect test outcomes.</li>
            <li><strong>FileParse:</strong>The module FileParse processes source files to prepare them for further analysis. It splits large blocks of source code into manageable chunks based on a specified token limit, using the tiktoken library to ensure the encoding aligns with that used by OpenAI, as GPT models have input size constraints.</li>
            <li><strong>ModuleSplitter:</strong>The module ModuleSplitter is a tool for extraction of relevant information from code files and managing this data through a MongoDB database. It establishes a connection to the database to store and retrieve information, identifies and categorizes functions along with their dependencies on external libraries, and generates mappings between code functions and their corresponding test assertions. It also offers methods to insert detailed records of code modules, test cases, and library dependencies into the database. </li>
            <li><strong>Main:</strong>This module Main connects the whole pipeline of the automated testing process. By integrating functionalities from related modules like TestCaseGenerator, ExecutionEngine, and ModuleSplitter, it manages test cases, analyzes test results, and improves code quality through targeted testing strategies.</li>
    

        
        
        </div>
    )
}
export default Popup;
