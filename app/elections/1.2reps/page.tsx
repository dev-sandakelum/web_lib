'use client'
import React, { useState, useEffect } from 'react';
import { Users, Vote, CheckCircle, TrendingUp, Search, ChevronDown, X, MessageCircle, UserPlus, Lock, Mail, Home, BarChart3, Menu as MenuIcon, LogOut } from 'lucide-react';

type Gender = 'male' | 'female';

interface Student {
  id: number;
  name: string;
  grade: string;
  tgNumber: string;
  gender: Gender;
  votes: number;
  hasVoted: boolean;
  whatsapp: string;
  isNominated: boolean;
}

export default function StudentVotingSystem(): React.ReactElement | null {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: 'Alex Johnson', grade: '12th', tgNumber: 'TG2001', gender: 'male', votes: 0, hasVoted: false, whatsapp: '+94771234567', isNominated: false },
    { id: 2, name: 'Maria Garcia', grade: '12th', tgNumber: 'TG2015', gender: 'female', votes: 0, hasVoted: false, whatsapp: '+94771234568', isNominated: false },
    { id: 3, name: 'James Chen', grade: '11th', tgNumber: 'TG2023', gender: 'male', votes: 0, hasVoted: false, whatsapp: '+94771234569', isNominated: false },
    { id: 4, name: 'Sarah Williams', grade: '12th', tgNumber: 'TG2042', gender: 'female', votes: 0, hasVoted: false, whatsapp: '+94771234570', isNominated: false },
    { id: 5, name: 'David Kumar', grade: '11th', tgNumber: 'TG2058', gender: 'male', votes: 0, hasVoted: false, whatsapp: '+94771234571', isNominated: false },
    { id: 6, name: 'Emma Brown', grade: '12th', tgNumber: 'TG2067', gender: 'female', votes: 0, hasVoted: false, whatsapp: '+94771234572', isNominated: false },
    { id: 7, name: 'Michael Lee', grade: '11th', tgNumber: 'TG2089', gender: 'male', votes: 0, hasVoted: false, whatsapp: '+94771234573', isNominated: false },
    { id: 8, name: 'Olivia Davis', grade: '12th', tgNumber: 'TG2103', gender: 'female', votes: 0, hasVoted: false, whatsapp: '+94771234574', isNominated: false },
    { id: 9, name: 'Ryan Martinez', grade: '11th', tgNumber: 'TG2127', gender: 'male', votes: 0, hasVoted: false, whatsapp: '+94771234575', isNominated: false },
    { id: 10, name: 'Sophie Anderson', grade: '12th', tgNumber: 'TG2145', gender: 'female', votes: 0, hasVoted: false, whatsapp: '+94771234576', isNominated: false },
  ]);
  
  const [currentUser, setCurrentUser] = useState<Student | null>(null);
  const [votedBoy, setVotedBoy] = useState<number | null>(null);
  const [votedGirl, setVotedGirl] = useState<number | null>(null);
  const [mainView, setMainView] = useState<'menu' | 'nominations' | 'voting'>('menu');
  const [view, setView] = useState<'whatsapp' | 'password' | 'success' | 'nominate' | 'voting' | 'results'>('whatsapp');
  const [whatsappNumber, setWhatsappNumber] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [sentCode, setSentCode] = useState<string>('');
  const [showCodeInput, setShowCodeInput] = useState<boolean>(false);
  const [adminPassword, setAdminPassword] = useState<string>('');
  const [isVotingEnabled, setIsVotingEnabled] = useState<boolean>(false);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [selectedCandidate, setSelectedCandidate] = useState<Student | null>(null);
  const [votingFor, setVotingFor] = useState<Gender | null>(null);
  const [boySearchTerm, setBoySearchTerm] = useState<string>('');
  const [girlSearchTerm, setGirlSearchTerm] = useState<string>('');
  const [isBoyDropdownOpen, setIsBoyDropdownOpen] = useState<boolean>(false);
  const [isGirlDropdownOpen, setIsGirlDropdownOpen] = useState<boolean>(false);

  const handleSendCode = () => {
    const student = students.find(s => s.whatsapp === whatsappNumber);
    if (student) {
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      setSentCode(code);
      setShowCodeInput(true);
      alert(`Verification code sent to WhatsApp: ${code}\n(In production, this would be sent via WhatsApp API)`);
    } else {
      alert('WhatsApp number not found in student database');
    }
  };

  const handleVerifyCode = () => {
    if (verificationCode === sentCode) {
      const student = students.find(s => s.whatsapp === whatsappNumber);
      setCurrentUser(student ?? null);
      setView('success');
      setTimeout(() => {
        if (mainView === 'nominations') {
          setView('nominate');
        } else if (mainView === 'voting') {
          setView('voting');
        }
      }, 1500);
    } else {
      alert('Invalid verification code');
    }
  };

  const handleNominate = (studentId: number): void => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId ? { ...student, isNominated: true } : student
      )
    );
    alert('Nomination submitted successfully!');
  };

  const handleVote = (candidateId: number, gender: Gender): void => {
    if (!currentUser || candidateId === currentUser.id) return;

    setStudents(prevStudents => 
      prevStudents.map(student => {
        if (student.id === candidateId) {
          return { ...student, votes: student.votes + 1 };
        }
        if (student.id === currentUser.id && gender === 'male' && !votedBoy) {
          return { ...student, hasVoted: true };
        }
        if (student.id === currentUser.id && gender === 'female' && !votedGirl) {
          return { ...student, hasVoted: true };
        }
        return student;
      })
    );

    if (gender === 'male') {
      setVotedBoy(candidateId);
    } else {
      setVotedGirl(candidateId);
    }

    if (gender === 'male') {
      setBoySearchTerm('');
      setIsBoyDropdownOpen(false);
    } else {
      setGirlSearchTerm('');
      setIsGirlDropdownOpen(false);
    }
    setShowConfirmation(false);
    
    if ((gender === 'male' && votedGirl) || (gender === 'female' && votedBoy)) {
      setTimeout(() => {
        setView('results');
      }, 1500);
    }
  };


  const handleCandidateSelect = (candidateId: number, gender: Gender): void => {
    const candidate = students.find(s => s.id === candidateId) ?? null;
    setSelectedCandidate(candidate);
    setVotingFor(gender);
    setShowConfirmation(true);
    setIsBoyDropdownOpen(false);
    setIsGirlDropdownOpen(false);
  };

  const confirmVote = (): void => {
    if (selectedCandidate && votingFor) {
      handleVote(selectedCandidate.id, votingFor);
    }
  };

  const cancelVote = () => {
    setShowConfirmation(false);
    setSelectedCandidate(null);
    setVotingFor(null);
  };

  const handleAdminAccess = () => {
    if (adminPassword === '9th1.2reps') {
      setIsVotingEnabled(true);
      setMainView('voting');
      setView('whatsapp');
      setAdminPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  const getInitials = (name?: string): string => {
    const n = name ?? '';
    if (!n) return '';
    return n.split(' ').map(part => part[0]).join('');
  };

  const nominatedStudents = students.filter(s => s.isNominated);
  const maleNominees = nominatedStudents.filter(s => s.gender === 'male');
  const femaleNominees = nominatedStudents.filter(s => s.gender === 'female');

  const filteredMaleCandidates = maleNominees.filter(student => 
    student.id !== currentUser?.id &&
    (student.name.toLowerCase().includes(boySearchTerm.toLowerCase()) ||
    student.tgNumber.toLowerCase().includes(boySearchTerm.toLowerCase()))
  );

  const filteredFemaleCandidates = femaleNominees.filter(student => 
    student.id !== currentUser?.id &&
    (student.name.toLowerCase().includes(girlSearchTerm.toLowerCase()) ||
    student.tgNumber.toLowerCase().includes(girlSearchTerm.toLowerCase()))
  );

  const totalBoyVotes = maleNominees.reduce((sum, s) => sum + s.votes, 0);
  const totalGirlVotes = femaleNominees.reduce((sum, s) => sum + s.votes, 0);
  const sortedMaleNominees = [...maleNominees].sort((a, b) => b.votes - a.votes);
  const sortedFemaleNominees = [...femaleNominees].sort((a, b) => b.votes - a.votes);

  if (mainView === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex justify-center mb-6">
              <div className="bg-indigo-100 p-4 rounded-full">
                <Vote className="w-12 h-12 text-indigo-600" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
              Class Representative Elections
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Select Boy & Girl Representatives
            </p>

            <div className="space-y-4">
              <button
                onClick={() => {
                  setMainView('nominations');
                  setView('whatsapp');
                }}
                className="w-full flex items-center gap-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-xl transition-all border-2 border-purple-200 hover:border-purple-300"
              >
                <div className="w-14 h-14 bg-purple-200 rounded-full flex items-center justify-center">
                  <UserPlus className="w-7 h-7 text-purple-700" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-bold text-gray-800 text-lg">Request Nominations</div>
                  <div className="text-sm text-gray-600">Nominate candidates for representatives</div>
                </div>
              </button>

              <button
                onClick={() => {
                  setMainView('voting');
                  setView('password');
                }}
                className="w-full flex items-center gap-4 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 rounded-xl transition-all border-2 border-indigo-200 hover:border-indigo-300"
              >
                <div className="w-14 h-14 bg-indigo-200 rounded-full flex items-center justify-center">
                  <Lock className="w-7 h-7 text-indigo-700" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-bold text-gray-800 text-lg">Vote Now</div>
                  <div className="text-sm text-gray-600">Cast your votes (Password Protected)</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'password') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <button
              onClick={() => setMainView('menu')}
              className="mb-6 text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              ← Back to Menu
            </button>

            <div className="flex justify-center mb-6">
              <div className="bg-indigo-100 p-4 rounded-full">
                <Lock className="w-12 h-12 text-indigo-600" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
              Voting Access
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Enter password to enable voting
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Password
                </label>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-400 outline-none"
                  onKeyPress={(e) => e.key === 'Enter' && handleAdminAccess()}
                />
              </div>

              <button
                onClick={handleAdminAccess}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors"
              >
                Access Voting
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'whatsapp') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <button
              onClick={() => setMainView('menu')}
              className="mb-6 text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              ← Back to Menu
            </button>

            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <MessageCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
              WhatsApp Login
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Verify your identity with WhatsApp
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  placeholder="+94771234567"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-400 outline-none"
                  disabled={showCodeInput}
                />
              </div>

              {!showCodeInput ? (
                <button
                  onClick={handleSendCode}
                  className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
                >
                  Send Verification Code
                </button>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Verification Code
                    </label>
                    <input
                      type="text"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      placeholder="Enter 6-digit code"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-400 outline-none"
                      maxLength={6}
                    />
                  </div>
                  <button
                    onClick={handleVerifyCode}
                    className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
                  >
                    Verify & Continue
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Login Successful!</h2>
            <p className="text-gray-600 mb-4">Welcome, {currentUser?.name}</p>
            <p className="text-sm text-gray-500">Redirecting...</p>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'nominate') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-2xl mx-auto py-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center font-semibold text-indigo-700">
                  {getInitials(currentUser?.name)}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{currentUser?.name ?? ''}</div>
                  <div className="text-sm text-gray-500">{currentUser?.tgNumber ?? ''}</div>
                </div>
              </div>
              <button
                onClick={() => {
                  setCurrentUser(null);
                  setMainView('menu');
                  setView('whatsapp');
                }}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Nominate Candidates</h2>
            <p className="text-gray-600 mb-6">Select students to nominate as representatives</p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Boy Candidates
              </h3>
              <div className="space-y-3">
                {students.filter(s => s.gender === 'male').map(student => (
                  <div key={student.id} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center font-semibold text-blue-700">
                      {getInitials(student.name)}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">{student.name}</div>
                      <div className="text-sm text-gray-500">{student.tgNumber} • Grade {student.grade}</div>
                    </div>
                    {student.isNominated ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <button
                        onClick={() => handleNominate(student.id)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        Nominate
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                Girl Candidates
              </h3>
              <div className="space-y-3">
                {students.filter(s => s.gender === 'female').map(student => (
                  <div key={student.id} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center font-semibold text-pink-700">
                      {getInitials(student.name)}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">{student.name}</div>
                      <div className="text-sm text-gray-500">{student.tgNumber} • Grade {student.grade}</div>
                    </div>
                    {student.isNominated ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <button
                        onClick={() => handleNominate(student.id)}
                        className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        Nominate
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'voting') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-2xl mx-auto py-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center font-semibold text-indigo-700">
                  {getInitials(currentUser?.name)}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{currentUser?.name ?? ''}</div>
                  <div className="text-sm text-gray-500">{currentUser?.tgNumber ?? ''}</div>
                </div>
              </div>
              <button
                onClick={() => setView('results')}
                className="px-4 py-2 bg-indigo-100 hover:bg-indigo-200 rounded-lg text-sm font-medium transition-colors"
              >
                View Results
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Vote for Boy Representative</h2>
            <p className="text-gray-600 mb-6">Select one male candidate</p>

            <div className="relative mb-6">
              <div
                onClick={() => !votedBoy && setIsBoyDropdownOpen(!isBoyDropdownOpen)}
                className={`w-full flex items-center justify-between p-4 bg-gray-50 border-2 rounded-xl transition-colors ${
                  votedBoy ? 'opacity-50 cursor-not-allowed border-gray-200' : 'cursor-pointer hover:border-blue-300 border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={boySearchTerm}
                    onChange={(e) => {
                      setBoySearchTerm(e.target.value);
                      setIsBoyDropdownOpen(true);
                    }}
                    placeholder="Search boy candidate..."
                    className="bg-transparent outline-none flex-1"
                    disabled={votedBoy !== null}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
                {votedBoy ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isBoyDropdownOpen ? 'rotate-180' : ''}`} />
                )}
              </div>

              {isBoyDropdownOpen && !votedBoy && (
                <div className="absolute z-10 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-lg max-h-80 overflow-y-auto">
                  {filteredMaleCandidates.length > 0 ? (
                    filteredMaleCandidates.map(student => (
                      <button
                        key={student.id}
                        onClick={() => handleCandidateSelect(student.id, 'male')}
                        className="w-full flex items-center gap-3 p-4 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center font-semibold text-blue-700">
                          {getInitials(student.name)}
                        </div>
                        <div className="flex-1 text-left">
                          <div className="font-semibold text-gray-800">{student.name}</div>
                          <div className="text-sm text-gray-500">{student.tgNumber} • Grade {student.grade}</div>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="p-4 text-center text-gray-500 text-sm">
                      No male candidates found
                    </div>
                  )}
                </div>
              )}
            </div>

            {votedBoy && (
              <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <div>
                  <p className="font-semibold text-green-800">Vote cast for boy representative</p>
                  <p className="text-sm text-green-700">{students.find(s => s.id === votedBoy)?.name}</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Vote for Girl Representative</h2>
            <p className="text-gray-600 mb-6">Select one female candidate</p>

            <div className="relative mb-6">
              <div
                onClick={() => !votedGirl && setIsGirlDropdownOpen(!isGirlDropdownOpen)}
                className={`w-full flex items-center justify-between p-4 bg-gray-50 border-2 rounded-xl transition-colors ${
                  votedGirl ? 'opacity-50 cursor-not-allowed border-gray-200' : 'cursor-pointer hover:border-pink-300 border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={girlSearchTerm}
                    onChange={(e) => {
                      setGirlSearchTerm(e.target.value);
                      setIsGirlDropdownOpen(true);
                    }}
                    placeholder="Search girl candidate..."
                    className="bg-transparent outline-none flex-1"
                    disabled={votedGirl !== null}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
                {votedGirl ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isGirlDropdownOpen ? 'rotate-180' : ''}`} />
                )}
              </div>

              {isGirlDropdownOpen && !votedGirl && (
                <div className="absolute z-10 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-lg max-h-80 overflow-y-auto">
                  {filteredFemaleCandidates.length > 0 ? (
                    filteredFemaleCandidates.map(student => (
                      <button
                        key={student.id}
                        onClick={() => handleCandidateSelect(student.id, 'female')}
                        className="w-full flex items-center gap-3 p-4 hover:bg-pink-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center font-semibold text-pink-700">
                          {getInitials(student.name)}
                        </div>
                        <div className="flex-1 text-left">
                          <div className="font-semibold text-gray-800">{student.name}</div>
                          <div className="text-sm text-gray-500">{student.tgNumber} • Grade {student.grade}</div>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="p-4 text-center text-gray-500 text-sm">
                      No female candidates found
                    </div>
                  )}
                </div>
              )}
            </div>

            {votedGirl && (
              <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <div>
                  <p className="font-semibold text-green-800">Vote cast for girl representative</p>
                  <p className="text-sm text-green-700">{students.find(s => s.id === votedGirl)?.name}</p>
                </div>
              </div>
            )}

            {votedBoy && votedGirl && (
              <div className="mt-6 p-4 bg-indigo-50 border-2 border-indigo-200 rounded-xl text-center">
                <p className="font-semibold text-indigo-800">Both votes submitted successfully!</p>
                <p className="text-sm text-indigo-700 mt-1">Redirecting to results...</p>
              </div>
            )}
          </div>

          {showConfirmation && selectedCandidate && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${votingFor === 'male' ? 'bg-blue-100' : 'bg-pink-100'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Vote className={`w-8 h-8 ${votingFor === 'male' ? 'text-blue-600' : 'text-pink-600'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Confirm Your Vote</h3>
                  <p className="text-gray-600">Are you sure you want to vote for:</p>
                </div>

                <div className={`${votingFor === 'male' ? 'bg-blue-50 border-blue-200' : 'bg-pink-50 border-pink-200'} border-2 rounded-xl p-4 mb-6`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-14 h-14 ${votingFor === 'male' ? 'bg-blue-200' : 'bg-pink-200'} rounded-full flex items-center justify-center font-semibold ${votingFor === 'male' ? 'text-blue-700' : 'text-pink-700'}`}>
                      {getInitials(selectedCandidate.name)}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-800 text-lg">{selectedCandidate.name}</div>
                      <div className="text-sm text-gray-600">{selectedCandidate.tgNumber} • Grade {selectedCandidate.grade}</div>
                      <div className="text-sm font-medium text-gray-700 mt-1">
                        {votingFor === 'male' ? '👦 Boy Representative' : '👧 Girl Representative'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6">
                  <p className="text-sm text-yellow-800 text-center">
                    ⚠️ This action cannot be undone
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={cancelVote}
                    className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold text-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmVote}
                    className={`flex-1 px-6 py-3 ${votingFor === 'male' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-pink-600 hover:bg-pink-700'} rounded-xl font-semibold text-white transition-colors`}
                  >
                    Confirm Vote
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (view === 'results') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto py-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center font-semibold text-indigo-700">
                  {getInitials(currentUser?.name)}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{currentUser?.name ?? ''}</div>
                  <div className="text-sm text-gray-500">{(currentUser?.tgNumber ?? '') + ' • Viewing results'}</div>
                </div>
              </div>
              <button
                onClick={() => {
                  setCurrentUser(null);
                  setVotedBoy(null);
                  setVotedGirl(null);
                  setMainView('menu');
                  setView('whatsapp');
                }}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Boy Representative</h2>
                  <p className="text-sm text-gray-600">Total votes: {totalBoyVotes}</p>
                </div>
              </div>

              <div className="space-y-4">
                {sortedMaleNominees.length > 0 ? (
                  sortedMaleNominees.map((student, index) => {
                    const percentage = totalBoyVotes > 0 ? (student.votes / totalBoyVotes) * 100 : 0;
                    
                    return (
                      <div key={student.id} className="relative">
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 relative z-10">
                          <div className="text-xl font-bold text-gray-400 w-6">
                            #{index + 1}
                          </div>
                          <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center font-semibold text-sm text-blue-700">
                            {getInitials(student.name)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-800 truncate">{student.name}</div>
                            <div className="text-xs text-gray-500">{student.tgNumber}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-lg text-blue-600">{student.votes}</div>
                            <div className="text-xs text-gray-500">{percentage.toFixed(1)}%</div>
                          </div>
                        </div>
                        
                        <div className="absolute top-0 left-0 h-full bg-blue-100 rounded-xl transition-all duration-500"
                             style={{ width: `${percentage}%`, opacity: 0.5 }} />
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No male nominees yet</p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Girl Representative</h2>
                  <p className="text-sm text-gray-600">Total votes: {totalGirlVotes}</p>
                </div>
              </div>

              <div className="space-y-4">
                {sortedFemaleNominees.length > 0 ? (
                  sortedFemaleNominees.map((student, index) => {
                    const percentage = totalGirlVotes > 0 ? (student.votes / totalGirlVotes) * 100 : 0;
                    
                    return (
                      <div key={student.id} className="relative">
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 relative z-10">
                          <div className="text-xl font-bold text-gray-400 w-6">
                            #{index + 1}
                          </div>
                          <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center font-semibold text-sm text-pink-700">
                            {getInitials(student.name)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-800 truncate">{student.name}</div>
                            <div className="text-xs text-gray-500">{student.tgNumber}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-lg text-pink-600">{student.votes}</div>
                            <div className="text-xs text-gray-500">{percentage.toFixed(1)}%</div>
                          </div>
                        </div>
                        
                        <div className="absolute top-0 left-0 h-full bg-pink-100 rounded-xl transition-all duration-500"
                             style={{ width: `${percentage}%`, opacity: 0.5 }} />
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No female nominees yet</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}