const bcrypt = require('bcrypt');

exports.modifiedAt = async function(next){
    try {
        if (!this.isNew) {
            this.modifiedAt = Date.now();
        }
        next();
    } catch (error) {
        next();
    }
}

exports.hashPassword = async function(next){
    const user = this;
  
    // Only hash the password if it has been modified (or is new)
    if (user.isNew) {
                // Generate a salt
            bcrypt.genSalt(10, (err, salt) => {
            if (err) return next(err);
        
            // Hash the password using the generated salt
            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) return next(err);
                // Replace the plaintext password with the hash
            user.password = hash;
            next();
            });
        });
    } 
  return next();
}

exports.normalizeNames = async function(next){
    try {
        if (this.isNew) {
            
            const lowerCaseFirstname = this.firstname.toLowerCase();
            const lowerCaseMiddlename = this.middlename.toLowerCase();
            const lowerCaseLastname = this.lastname.toLowerCase();
            this.firstname = lowerCaseFirstname;
            this.middlename = lowerCaseMiddlename;
            this.lastname = lowerCaseLastname;
        }
        next();
    } catch (error) {
        next();
    }
}