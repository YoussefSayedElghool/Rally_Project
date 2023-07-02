

cd // to go to path 
cd G: // go to patation G

dir // show the all file and folder in yoru posation 

mkdir // mak a floder 

git clone https://github.com/YoussefSayedElghool/Rally_Project.git  // clone the repo. from github to your pc in you curent place

git status // git the status of your repo. and the new file that you add it in you local dir. but not add it to you to staging area 

git add File.html index.html main.css // add this file to the staging area Note that this file befor the command dosenot in the staging area as you add it in you local dir. 
 
git add * // add the all file that not not exist in staging area

git commit // add the file from staging area to local repo.

git push "remote repo. Name" "BranchName" // add the file from staging area to local repo.

git remote // return the remote

git branch // return branch name

git config --global user.name "FIRST_NAME LAST_NAME" // add you name

git config --global user.email "MY_NAME@example.com"

git pull origin // udate you local priject from remot project 
                // fetch the new update and marge it to you master (main) branch of te repo

git config --list // list the congfigration 

git help config  // will ope link to the manual of congfigration

git config -l --show-origin // show the pathes that our config. came from it 

git config --global --unset user.email // unset (remove) the user.email 

git config --global --edit // open editor to edit the config

git config --global core.editor "Visual Studio Code"

ssh-keygen -t rsa -b 4096 -C "www.yyalgol@gmail.com"

cat ~/.ssh/id_rsa.pub

touch index.html // creat file its name is index.html

git init    //Initialized empty Git repository in G:/My Drive/my_test/.git/



// to upload the repo.               
git remote add origin git@github.com:YoussefSayedElghool/Course.git
git branch -M main
git push -u origin main



// Alis

git config --global alias.st status

// Test
git config --global alis.st //---> return status


// to use 

git st 

// Brach 

git branch scroll


git checkout scroll //Switched to branch 'scroll'  

git checkout main

git branch -d scroll // Deleted branch scroll (safe delete frist chick if this branch have same eidtation that not marged the not delete otherwise delete)

git branch -D scroll // force Deletedtion

git checkout -b MyBaranch // Switched to a new branch 'MyBaranch'

git branch -m youssef // rename this branch name 

git stash // haddin the files
git stash list
git stash pop // apear the last stash (last index) file and delete it  from the stash 


git stash apply // apear the last stash (last index) file but not delete it  from the stash 

git stash pop stash@{1} // apear the last stash file and delete it  from the stash BY index

git stash apply stash@{1} // apear the last stash file but not delete it  from the stash BY index

git stash drop // delete the stash and all of it

git stash drop stash@{1} // delete the stash and all of it BY index

git stash show // show what exist at the last stash (last index)

git stash show stash@{1} // show what exist at the last stash (last index) BY index

git stash clear // delete all stashes 



 




















