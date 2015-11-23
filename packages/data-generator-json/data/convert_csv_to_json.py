
import csv, os.path
import json, sys, os
#import psycopg2
#from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT

# DB INPUTS
DBUSER = "urank"
DBPWD = "records"
DBNAME = "urank"

# TEAM INPUTS
DIVISION = "I"

# FILES & PATHS
INPUT_FILE = os.path.join("csv", "Top500.csv")
FIXTURES = os.path.join("json")
RECORDS_JSON_FILE = os.path.join(FIXTURES, "records_division_%s.json" % DIVISION )
TEAMS_JSON_FILE = os.path.join(FIXTURES, "teams_division_%s.json" % DIVISION )



# Create Datbase
def createDB():
    con = None
    #try:
        #con = psycopg2.connect(database='postgres', user=DBUSER, password=DBPWD)
        #cur = con.cursor()
        # Not sure
        #con.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
        # create DB
        #cur = con.cursor()
        #cur.execute('CREATE DATABASE ' + DBNAME)
    #except psycopg2.DatabaseError, e:
    #    print 'Error %s' % e
    #finally:
    #    if con:
    #        con.close()

def formatTime(time):
    if (time.count(":") == 0 ):
        time = "00:00:%s" % time
    elif (time.count(":") == 1):
        time = "00:%s" % time

    return time

# DATE is format MM/DD/YYYY
def formatSwimDate(date):
    parts=date.split("/")
    return "%s-%s-%s" % (parts[2], parts[0], parts[1] ) # YYYY-MM-DD


def _get_city_from_team(name):
    if "Florida" in name:
        return "Miami"
    elif "Washington" in name:
        return "Seattle"
    elif "Alabama" in name:
        return "Atlanta"
    elif "Chicago" in name:
        return "Chicago"
    elif "California" in name:
        return "Los Angeles"
    elif "UNC" in name:
        return "Wilmington"
    else:
        return "city"

def convert_csv(csv_file_name):
    # open files
    csv_file = open (csv_file_name, "r")
    records_json_file = open( RECORDS_JSON_FILE, "w")
    teams_json_file = open( TEAMS_JSON_FILE, "w")

    reader = csv.reader(csv_file)
    header = reader.next()
    rows = list(reader)

    records = []
    teams = []
    num=0

    records_json_file.write("[\t\n")
    for record in rows:
        ##############################################
        # Team fields
        ##############################################
        team_fields = {
            "team_code"  : record[4],
            "short_name" : record[5],
            "division"   : DIVISION ,
            "city" : _get_city_from_team(record[5]),
        }
        # Check this team doesnt exist
        found = False
        for t in teams:
            if t['team_code'] == team_fields['team_code']:
                found = True
                break

        # If not already present, add this team
        if not found:
            #team = {
                #"model":"records.team",
                #"fields":team_fields
            #}
            teams.append(team_fields)

        ##############################################
        # Fields/columns of Record
        ##############################################
        record_fields = {
            header[ 0] : record[0] , # meet_name
            header[ 1] : formatTime( record[1] ), # swim_time
            header[ 2] : formatSwimDate( record[2] ) , # swim_date
            header[ 4] : record[4], # team_code
            header[ 6] : record[6], # full_name
        }

        # set stroke, distance, gender from full_desc_intl
        full_desc = record[16].split(" ")
        record_fields['distance'] = int( full_desc[0] )
        # Individual Medley
        if (len(full_desc) == 6):
            record_fields['stroke'] = "%s %s" % (full_desc[2], full_desc[3] )
            record_fields['gender'] = full_desc[4]
        else:
            record_fields['stroke'] = full_desc[2]
            record_fields['gender'] = full_desc[3]

        # Record JSON object
        #record = {
            #"model": "records.record",
            #"pk": num,
            #"fields": record_fields,
        #}
        # Add Record to list
        records.append(record_fields)

        # Write record to file
        records_json_file.write ("\n\t" + json.dumps(record_fields))
        # If not last item, add comma
        if (num < len(rows)-1):
            records_json_file.write(",")

        print record
        print "\n"
        num += 1

    records_json_file.write("\n]")

    # WRITE TEAMS TO JSON FILE
    teams_json_file.write("[\t\n")
    n = 0
    for t in teams:
        teams_json_file.write ("\n\t" + json.dumps(t))
        # If not last item, add comma
        if (n < len(teams)-1):
            teams_json_file.write(",")
        n += 1
    teams_json_file.write("\n]")


    # close files
    teams_json_file.close()
    records_json_file.close()
    csv_file.close()

    print "Number records: " + str(len(records))
    print "Number teams: " + str(len(teams))




def main():
    #createDB()
    convert_csv(INPUT_FILE)

    # load data into DB
    #os.system("python manage.py loaddata " + RECORDS_JSON_FILE)
    #os.system("python manage.py loaddata " + TEAMS_JSON_FILE)



main()
