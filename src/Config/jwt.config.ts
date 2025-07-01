// import jwt from 'jsonwebtoken';

// app.post('/login', (req, res, next) => {
//   passport.authenticate('local', { session: false }, (err, user, info) => {
//     if (err || !user) {
//       return res.status(401).json({ message: info?.message || 'Login failed' });
//     }

//     const payload = {
//       id: user.id,
//       username: user.username,
//     };

//     const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' });
//     return res.json({ token });
//   })(req, res, next);
// });