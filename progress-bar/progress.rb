#!/usr/bin/env ruby

print "\e]9;4;3;\e\\"
sleep 2

100.times do |i|
  percent = i + 1

  print "\e]9;4;1;#{percent}\e\\"

  filled = percent / 5
  bar = if percent < 100
    "=" * filled + ">" + " " * (19 - filled)
  else
    "=" * 20
  end
  print "\r[ #{bar} ] #{percent.to_s.rjust(3)} / 100% complete"

  $stdout.flush
  sleep (rand ** 2) * 0.4
end

# Clear the progress indicator and move to next line when done
print "\e]9;4;0;0\e\\"
puts

