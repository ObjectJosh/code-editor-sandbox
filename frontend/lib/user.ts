export function currentUser() {
  return {
    id: "1234567890",
    name: "John Doe",
    email: "john.doe@example.com",
    picture: "https://example.com/john-doe.jpg",
    emailVerified: new Date(),
    isAdmin: false,
    isStaff: false,
    isActive: true,
    isSuperuser: false,
  }
}
