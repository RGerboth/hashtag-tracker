# GitHub Copilot Guide for Hashtag Tracker

This guide helps you get the most out of GitHub Copilot while working on the hashtag tracker project.

## Quick Start

1. **Install Required Extensions**
   - Open VSCode in this project
   - You'll be prompted to install recommended extensions including GitHub Copilot
   - Or manually install: `GitHub Copilot` and `GitHub Copilot Chat`

2. **Verify Setup**
   - Check that Copilot is active (look for the Copilot icon in the status bar)
   - Try typing a comment like `// function to extract hashtags from tweet text`
   - Copilot should suggest code completions

## Project Context for Copilot

When asking Copilot for help, provide this context:

- **Project Type**: Node.js/TypeScript API for tracking trending hashtags
- **Database**: PostgreSQL with Sequelize ORM  
- **Key Models**: Tweet, Hashtag, User
- **Main Endpoints**: `POST /tweet` and `GET /trending-hashtags`
- **Framework**: Express.js with Passport authentication

## Useful Copilot Prompts

### Code Generation
```
// Generate a function to validate tweet text length and hashtag count
// Create a middleware to rate limit API requests  
// Write a function to clean and normalize hashtag text
```

### Testing
```
// Generate unit tests for the hashtag extraction logic
// Create integration tests for the trending hashtags endpoint
// Write mock data for testing tweet processing
```

### Documentation
```
// Generate JSDoc comments for the Tweet model
// Create API documentation for the trending hashtags endpoint
```

## Copilot Chat Commands

- `/explain` - Understand existing code
- `/fix` - Get suggestions for fixing bugs
- `/tests` - Generate test cases
- `/doc` - Create documentation

## Best Practices

1. **Be Specific**: Include function names, file paths, and expected behavior
2. **Provide Context**: Mention the database schema or API requirements
3. **Iterate**: Refine suggestions by asking follow-up questions
4. **Review**: Always review and test Copilot-generated code

## Files Excluded from Copilot

The `.copilotignore` file excludes:
- `node_modules/` and build artifacts
- Environment files with sensitive data
- Database files and logs
- Configuration files with credentials

This ensures Copilot focuses on your application code while keeping sensitive information private.