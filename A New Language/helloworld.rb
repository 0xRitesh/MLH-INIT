describe "Hello World" do 
    it 'has a file hello_world.rb' do
      expect(File.exists?("hello_world.rb")).to be_truthy, "Did you create the file hello_world.rb? (If so, is it spelled exactly the same with the same capitalization?)"
    end
  
    it 'puts "Hello World!"' do
   
      expect($stdout).to receive(:puts).with("Hello World!")
      load './hello_world.rb'
    end
  end