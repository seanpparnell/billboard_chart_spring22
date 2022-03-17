
Song.delete_all
Artist.delete_all
Billboard.delete_all 

5.times do 
  billboard = Billboard.create(
    title: Faker::Kpop.boy_bands,
    description: Faker::Lorem.paragraph
  )
  3.times do
    artist = Artist.create(
      title: Faker::Cannabis.strain,
      rank: Faker::Number.number(digits: 10),
      billboard_id: billboard.id
    )
    Song.create(
      title: Faker::Kpop.boy_bands,
      duration: Faker::Number.number(digits: 10),
      artist_id: artist.id
    )
  end 
end

puts "Number of Billboards: #{Billboard.all.count}"
Billboard.all.each do |billboard|  
  puts "#{billboard.id}, title: #{billboard.title} desc: #{billboard.description}"
end

puts "Number of Artists: #{Artist.all.count}"
Artist.all.each do |artist|  
  puts "#{artist.id}, title: #{artist.title} rank: #{artist.rank}"
end

puts "Number of Songs: #{Song.all.count}"
Song.all.each do |song|  
  puts "#{song.id}, title: #{song.subject} duration: #{song.duration}"
end