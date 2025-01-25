package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.npc.NpcDialogNew_1;
   
   public class NewYearsDaySpiritPageantS1Panel extends ActivityModel
   {
      protected var State:int;
      
      protected var bossIndex:int;
      
      protected var IsOpen:Boolean;
      
      protected var count:int;
      
      private var lastItemNum:int = -1;
      
      public function NewYearsDaySpiritPageantS1Panel()
      {
         super();
         resUrl = "2018/1229/NewYearsDaySpiritPageantS1Panel";
         configUrl = "2018/1229/NewYearsDaySpiritPageant";
      }
      
      override public function show() : void
      {
         StatManager.sendStat2014("1229元旦节精灵庆典","打开场景面板","2018运营活动");
         super.show();
      }
      
      override public function init(data:Object = null) : void
      {
         super.init(data);
         if(data != null)
         {
            this.lastItemNum = data as int;
         }
      }
      
      override protected function updatePanel() : void
      {
         this.State = getValue("State");
         this.IsOpen = getValue("IsOpen");
         this.count = getValue("Count");
         this.bossIndex = getValue("bossIndex");
         if(this.State == 0 && this.count == 0)
         {
            StatManager.sendStat2014("1229元旦节精灵庆典","开始当日活动","2018运营活动");
            _ui["mc1"].visible = true;
            _ui["mc1"]["mc2"].gotoAndStop(1);
            _ui["mc3"].gotoAndStop(1);
            _ui["mc4"].gotoAndStop(2);
         }
         if(this.State == 0 && this.count > 0 && this.count < 5)
         {
            _ui["mc1"].visible = true;
            _ui["mc1"]["mc2"].gotoAndStop(3);
            _ui["mc1"]["mc2"]["numTxt9"].text = 5 - this.count;
            _ui["mc3"].gotoAndStop(1);
            _ui["mc4"].gotoAndStop(2);
         }
         if(this.State == 1 && this.lastItemNum == -1)
         {
            _ui["mc1"].visible = true;
            _ui["mc1"]["mc2"].gotoAndStop(2);
            _ui["mc3"].gotoAndStop(2);
            _ui["mc4"].gotoAndStop(1);
            this.stopPlaying2();
         }
         if(this.count >= 5)
         {
            _ui["mc1"].visible = true;
            _ui["mc1"]["mc2"].gotoAndStop(4);
            _ui["mc3"].gotoAndStop(2);
            _ui["mc4"].gotoAndStop(2);
         }
         if(this.lastItemNum != -1)
         {
            if(this.lastItemNum == 1)
            {
               StatManager.sendStat2014("1229元旦节精灵庆典","击败错误精灵","2018运营活动");
               _ui["mc1"].visible = true;
               _ui["mc1"]["mc2"].gotoAndStop(2);
               _ui["mc3"].gotoAndStop(2);
               _ui["mc4"].gotoAndStop(1);
               doAction("sub1Talk4").then(function():void
               {
                  ModuleManager.showAppModule("NewYearsDaySpiritPageantS2Panel");
               });
               this.lastItemNum = -1;
            }
            else
            {
               this.lastItemNum = -1;
               _ui["mc1"].visible = false;
               _ui["mc3"].gotoAndStop(2);
               _ui["mc4"].gotoAndStop(2);
               if(this.count >= 1 && this.count < 5)
               {
                  NpcDialogNew_1.show(4018,["哼哼，我就说嘛，凭本小姐的实力，这还不是轻轻松嘛~"],null,null,false,function():void
                  {
                     NpcDialogNew_1.show(3060,["想不到你有两把刷子，不过一次试炼可说明不了什么，看看还有" + (5 - count) + "次试炼你是否也能完美完成！"],["没问题！"],[function():void
                     {
                        _ui["mc1"].visible = true;
                        _ui["mc1"]["mc2"].gotoAndStop(3);
                        _ui["mc1"]["mc2"]["numTxt9"].text = 5 - count;
                        _ui["mc3"].gotoAndStop(1);
                        _ui["mc4"].gotoAndStop(2);
                     }]);
                  });
               }
               else if(this.count == 5)
               {
                  doAction("sub1Talk6").then(function():void
                  {
                     _ui["mc1"].visible = true;
                     _ui["mc1"]["mc2"].gotoAndStop(4);
                     _ui["mc3"].gotoAndStop(2);
                     _ui["mc4"].gotoAndStop(2);
                  });
               }
            }
         }
         if(this.IsOpen == false)
         {
            this.playAnimation();
            _ui["mc1"].visible = false;
            _ui["mc4"].visible = false;
            _ui["mc3"].gotoAndStop(2);
            _ui["mc4"].gotoAndStop(2);
         }
      }
      
      private function playAnimation() : void
      {
         if(BitBuffSetClass.getState(24254) == 0)
         {
            _ui["mc4"].visible = false;
            NpcDialogNew_1.show(3060,["一年没见，吉格尼斯，不知道你有没有进步呢？ "],null,null,false,function():void
            {
               NpcDialogNew_1.show(3060,["老规矩，让我们来切磋切磋吧。"],null,null,false,function():void
               {
                  NpcDialogNew_1.show(3061,["哈哈哈，过去这一年我可没有松懈，不过……今年的团聚总感觉少了谁……"],null,null,false,function():void
                  {
                     NpcDialogNew_1.show(3060,["咦？卡洛恩斯怎么没来？"],null,null,false,function():void
                     {
                        _ui["mc4"].visible = true;
                        NpcDialogNew_1.show(4018,["嘿嘿~卡洛恩斯他呀，刚与我切磋完毕，正在裹紧小被子偷偷哭泣呢~"],null,null,false,function():void
                        {
                           NpcDialogNew_1.show(3060,["哈？！你是不是有些太过狂妄了？卡洛恩斯虽然技不如我，可好歹也是我们祖系一族的新星呀！"],null,null,false,function():void
                           {
                              NpcDialogNew_1.show(4018,["哦~新的一年，“新星”这头衔也是时候易主了！"],null,null,false,function():void
                              {
                                 NpcDialogNew_1.show(3061,["等等，难道……你也是祖系一族？"],null,null,false,function():void
                                 {
                                    NpcDialogNew_1.show(4018,["你们可真是背着八面找九面，没见过世面！我可是风度翩翩、仪态万千、祖梅中的佼佼者，梅~诺~西~斯~"],null,null,false,function():void
                                    {
                                       NpcDialogNew_1.show(3060,["呃……呃。"],null,null,false,function():void
                                       {
                                          NpcDialogNew_1.show(3061,["诶呀，不管怎么说，咱们家族又壮大了一点嘛！不过你必须通过我们的试炼，我们才能认可你，对吧，亚梅迪丝？"],null,null,false,function():void
                                          {
                                             NpcDialogNew_1.show(3060,["果然又要来那个了么……好吧！"],null,null,false,function():void
                                             {
                                                NpcDialogNew_1.show(3060,["等下我会将这本【祖系之书】放在祖拉他们其中一人的身上，看看你能不能找出来。"],null,null,false,function():void
                                                {
                                                   NpcDialogNew_1.show(4018,["哼哼，我还以为是什么呢，原来是小孩子过家家的把戏 ，来吧来吧~不过我们有言在先，输了可不要像卡洛恩斯那样哭鼻子喔！"],null,null,false,function():void
                                                   {
                                                      NpcDialogNew_1.show(3060,["嘁！小瞧祖系之书的力量，你马上就会后悔的。那么，我要开始了。 "],null,null,false,function():void
                                                      {
                                                         BitBuffSetClass.setState(24254,1);
                                                         _ui["mc1"].visible = true;
                                                         _ui["mc1"]["mc2"].gotoAndStop(1);
                                                         _ui["mc3"].gotoAndStop(1);
                                                         _ui["mc4"].visible = true;
                                                         if(IsOpen == false)
                                                         {
                                                            doAction("FlgeReq",0);
                                                            refresh();
                                                         }
                                                      });
                                                   });
                                                });
                                             });
                                          });
                                       });
                                    });
                                 });
                              });
                           });
                        });
                     });
                  });
               });
            });
         }
         else if(this.IsOpen == false)
         {
            doAction("FlgeReq",0);
            refresh();
         }
      }
      
      private function playAnimation1() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("NewYearsDaySpiritPageantS1"),this.stopPlaying1);
      }
      
      private function stopPlaying1() : void
      {
         if(this.bossIndex == 0)
         {
            sendCmd(43306,[12,1]);
         }
         doAction("sub1Talk2").then(function():void
         {
            playAnimation2();
         });
      }
      
      private function playAnimation2() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("NewYearsDaySpiritPageantS2"),this.stopPlaying2);
      }
      
      private function stopPlaying2() : void
      {
         if(this.State == 0)
         {
            sendCmd(43306,[12,2]);
         }
         doAction("sub1Talk3").then(function():void
         {
            _ui["mc1"].visible = true;
            _ui["mc1"]["mc2"].gotoAndStop(2);
            _ui["mc4"].gotoAndStop(1);
            ModuleManager.showAppModule("NewYearsDaySpiritPageantS2Panel");
         });
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               hide();
               ModuleManager.showAppModule("NewYearsDaySpiritPageantMainPanel");
               break;
            case "go_1":
               if(this.State == 0)
               {
                  NpcDialog.show(1473,["梅诺西斯，你准备好开始这场试炼了吗？找出携带祖系之书的精灵！"],["我准备好了！","让我再准备下。"],[function():void
                  {
                     playAnimation1();
                     _ui["mc1"].visible = false;
                     _ui["mc3"].gotoAndStop(2);
                  },null],false,null,true);
               }
               break;
            case "go_2":
               ModuleManager.showAppModule("NewYearsDaySpiritPageantS2Panel");
               break;
            case "exchange":
               hide();
               ModuleManager.showAppModule("NewYearsDayThemeMainS2Panel");
         }
      }
   }
}

