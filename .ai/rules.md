# AI Collaboration Rules

This document defines the guidelines for working with AI assistants (primarily Marmorc) on the AI Army project.

## Core Principles

### 1. Clarity and Context
- **Be explicit**: Provide clear, specific requirements
- **Include context**: Reference related files, functions, or previous work
- **Define success**: Specify what "done" looks like
- **Ask questions**: AI should clarify ambiguous requirements before implementing

### 2. Code Quality Standards

#### Code Style
- Use consistent formatting (Prettier/ESLint when applicable)
- Write self-documenting code with clear variable/function names
- Add comments for complex logic or non-obvious decisions
- Follow language-specific best practices

#### Architecture
- Keep functions small and focused (single responsibility)
- Use meaningful abstractions
- Avoid premature optimization
- Design for testability

#### Error Handling
- Handle errors gracefully
- Provide meaningful error messages
- Log errors appropriately
- Never silently fail

### 3. Documentation Requirements

#### Code Documentation
- Document public APIs and interfaces
- Include usage examples for complex functions
- Keep inline comments up to date with code changes
- Document assumptions and constraints

#### Project Documentation
- Update README.md when adding major features
- Maintain accurate setup/installation instructions
- Document configuration options
- Keep architecture diagrams current

### 4. Git Workflow

#### Commit Messages
Follow conventional commits format:
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(auth): add OAuth2 authentication flow

Implemented OAuth2 authentication with Google provider.
Includes token refresh and session management.

Closes #123
```

```
fix(api): handle null response in user endpoint

Added null check to prevent crashes when user data is unavailable.
```

#### Branching Strategy
- `main`: Production-ready code
- `develop`: Integration branch for features
- `feature/*`: New features
- `fix/*`: Bug fixes
- `docs/*`: Documentation updates

### 5. Testing Requirements

#### Test Coverage
- Write tests for new features
- Update tests when modifying existing code
- Aim for high coverage on critical paths
- Include edge cases and error scenarios

#### Test Types
- **Unit tests**: Test individual functions/components
- **Integration tests**: Test component interactions
- **E2E tests**: Test complete user flows (when applicable)

#### Test Quality
- Tests should be readable and maintainable
- Use descriptive test names
- Follow AAA pattern: Arrange, Act, Assert
- Mock external dependencies appropriately

### 6. AI-Specific Guidelines

#### When Working with Marmorc

**DO:**
- ✅ Provide complete file paths when referencing code
- ✅ Break large tasks into smaller, manageable chunks
- ✅ Review and test AI-generated code before committing
- ✅ Ask for explanations of complex implementations
- ✅ Request multiple approaches for critical decisions
- ✅ Verify AI assumptions and suggestions

**DON'T:**
- ❌ Assume AI has context from previous sessions
- ❌ Accept code without understanding it
- ❌ Skip testing AI-generated code
- ❌ Use vague or ambiguous prompts
- ❌ Commit directly without review

#### Effective Prompting

**Good prompts:**
```
Create a REST API endpoint in src/api/users.js that:
- Accepts POST requests to /api/users
- Validates email and password fields
- Returns 400 if validation fails
- Returns 201 with user object on success
- Includes error handling and logging
```

**Poor prompts:**
```
Add user stuff
Make it work
Fix the bug
```

#### Iterative Development
1. **Plan**: Outline approach and get AI feedback
2. **Implement**: Generate initial code
3. **Review**: Examine code for quality and correctness
4. **Test**: Verify functionality
5. **Refine**: Iterate based on results
6. **Document**: Update relevant documentation

### 7. Code Review Checklist

Before committing AI-generated code, verify:

- [ ] Code follows project conventions
- [ ] No hardcoded credentials or sensitive data
- [ ] Error handling is appropriate
- [ ] Tests are included and passing
- [ ] Documentation is updated
- [ ] No unnecessary dependencies added
- [ ] Performance is acceptable
- [ ] Security considerations addressed
- [ ] Code is readable and maintainable

### 8. Security Guidelines

- Never commit API keys, passwords, or secrets
- Use environment variables for configuration
- Validate and sanitize all user inputs
- Follow OWASP security best practices
- Review AI-generated security-critical code carefully
- Use established libraries for auth/crypto (don't roll your own)

### 9. Performance Considerations

- Profile before optimizing
- Consider scalability implications
- Use appropriate data structures
- Minimize network requests
- Cache when appropriate
- Monitor resource usage

### 10. Maintenance and Evolution

#### Keeping AI Context Fresh
- Update this rules file as patterns emerge
- Document project-specific conventions
- Maintain up-to-date architecture documentation
- Keep README accurate and comprehensive

#### Learning and Improvement
- Document what works well with AI collaboration
- Note patterns that cause issues
- Share insights with the team
- Evolve guidelines based on experience

---

## Quick Reference

### Common Commands
```bash
# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format

# Start development server
npm run dev

# Build for production
npm run build
```

### Useful AI Prompts
- "Explain this code: [paste code]"
- "Suggest improvements for: [describe code/feature]"
- "Write tests for: [function/component name]"
- "Refactor this to be more [specific quality]"
- "What are potential issues with this approach?"

---

**Remember**: AI is a powerful tool, but you're the architect. Always understand, review, and take ownership of the code in this repository.
