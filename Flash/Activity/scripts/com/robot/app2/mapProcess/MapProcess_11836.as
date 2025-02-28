package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   
   public class MapProcess_11836 extends BaseMapProcess
   {
       
      
      private var initPos:Point;
      
      protected var passtime:int;
      
      protected var Curprogress:int;
      
      protected var _map:MapModel;
      
      public function MapProcess_11836()
      {
         super();
      }
      
      override protected function init() : void
      {
         StatManager.sendStat2014("0322净化星域魂塔","进入11836副本场景","2019运营活动");
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         MainManager.actorInfo.mapID = 11836;
         this.initPos = new Point(640,440);
         this._map = MapManager.currentMap;
         MainManager.actorModel.pos = this.initPos.clone();
         depthLevel.addEventListener(MouseEvent.CLICK,this.onConClick);
         this.update();
      }
      
      public function update(param1:* = null) : void
      {
         var e:* = param1;
         KTool.getMultiValue([103415,103416,103417,103418],function(param1:Array):void
         {
            var arr:Array = param1;
            passtime = arr[3] + 60 * 60 - SystemTimerManager.time;
            Curprogress = arr[2];
            if(arr[3] != 0)
            {
               if(passtime > 0)
               {
                  setUI();
               }
               else
               {
                  renewUI();
               }
            }
            else
            {
               renewUI();
            }
            if(arr[1] != 0)
            {
               if(arr[2] == 0)
               {
                  depthLevel["mc1"].gotoAndStop(arr[1]);
                  depthLevel["mc2"]["tips"].gotoAndStop(arr[1]);
               }
               else if(arr[2] == 1)
               {
                  depthLevel["mc1"].gotoAndStop(5);
                  depthLevel["mc2"]["tips"].gotoAndStop(5);
               }
               else
               {
                  depthLevel["mc1"].gotoAndStop(5);
                  depthLevel["mc2"].visible = false;
                  if(KTool.getBit(arr[0],arr[1]) == 1)
                  {
                     MapManager.changeMapWithCallback(1,function():void
                     {
                        SocketConnection.sendByQueue(43768,[21,4],function(param1:*):void
                        {
                           ModuleManager.showAppModule("PurifyStarDomainMainPanel");
                        });
                     });
                  }
                  else if(arr[1] == 1)
                  {
                     Animation1();
                  }
                  else if(arr[1] == 2)
                  {
                     Animation2();
                  }
                  else if(arr[1] == 3)
                  {
                     Animation3();
                  }
                  else
                  {
                     Animation4();
                  }
               }
            }
         });
         KTool.getBitSet([15330],function(param1:Array):void
         {
            if(param1[0] == 0)
            {
               setUI();
               playAnimation1();
            }
         });
      }
      
      public function onConClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var e:MouseEvent = param1;
         index = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "close":
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showAppModule("PurifyStarDomainMainPanel");
               });
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               PetManager.cureAllFree();
               break;
            case "btn_" + index:
               if(this.Curprogress == 0)
               {
                  NpcDialog.show(3838,["停下……快停下！我的身体……好疼！"],["我要动手了！","用钻石砸晕你！","赶紧躲开。"],[function():void
                  {
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
                     {
                        var e:PetFightEvent = param1;
                        FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                        if(FightManager.isWin)
                        {
                           KTool.getMultiValue([103417],function(param1:Array):void
                           {
                              if(param1[0] == 1)
                              {
                                 playAnimation();
                              }
                           });
                        }
                     });
                     FightManager.fightNoMapBoss("",15781 + index);
                     update();
                  },function():void
                  {
                     KTool.buyProductByCallback(255623,1,function():void
                     {
                        SocketConnection.sendByQueue(43768,[21,5],function(param1:*):void
                        {
                           playAnimation();
                           update();
                        });
                     });
                  },null],false,null,true);
               }
               else if(this.Curprogress == 1)
               {
                  NpcDialog.show(3838,["我好疼……我的头……我的身体……求求你们，不要再拿我做实验了！"],["…"],[function():void
                  {
                     NpcDialog.show(3838,["爸爸，妈妈……我……我不认识自己了……"],["我们不会伤害你的！"],[function():void
                     {
                        NpcDialog.show(3838,["啊啊啊！你们！都得死！"],["不好，他失去理智了！","用钻石砸晕你！","赶紧躲开。"],[function():void
                        {
                           FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
                           {
                              FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                           });
                           FightManager.fightNoMapBoss("",15786);
                           update();
                        },function():void
                        {
                           KTool.buyProductByCallback(255624,1,function():void
                           {
                              SocketConnection.sendByQueue(43768,[21,6],function(param1:*):void
                              {
                                 update();
                              });
                           });
                        },null],false,null,true);
                     }],false,null,true);
                  }],false,null,true);
               }
         }
      }
      
      private function playAnimation1() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("PurifyStarDomainS1"),this.stopPlaying1);
      }
      
      private function stopPlaying1() : void
      {
         NpcDialog.show(20,["好久没来这里了，这里还是阴森森的……听说这里最近有“怪物”出没，也不知道究竟在哪……"],null,null,false,function():void
         {
            NpcDialog.show(20,["幽冥魅影你快来啊，不是说一会儿就来的吗，呜呜呜呜……"],null,null,false,function():void
            {
               playAnimation2();
            });
         });
      }
      
      private function playAnimation2() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("PurifyStarDomainS2"),this.stopPlaying2);
      }
      
      private function stopPlaying2() : void
      {
         NpcDialog.show(20,["什……什么声音！"],null,null,false,function():void
         {
            NpcDialog.show(20,["别吧，我才刚到这里，不会就中彩了吧？"],null,null,false,function():void
            {
               playAnimation3();
            });
         });
      }
      
      private function playAnimation3() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("PurifyStarDomainS3"),this.stopPlaying3);
      }
      
      private function stopPlaying3() : void
      {
         NpcDialog.show(20,["走……走了？"],null,null,false,function():void
         {
            NpcDialog.show(20,["呼……这个怪物长得好可怕，还好没对我发起攻击……等到幽冥魅影过来，我们就可以揭开它的神秘面纱了！"],null,null,false,function():void
            {
               SocketConnection.sendByQueue(43768,[21,1],function(param1:*):void
               {
                  update();
               });
            });
         });
      }
      
      private function setUI() : void
      {
         depthLevel["mc1"].visible = false;
         depthLevel["mc2"].visible = false;
         depthLevel["mc3"].visible = false;
         depthLevel["mc4"].visible = false;
         depthLevel["mc5"].visible = false;
         depthLevel["arrow"].visible = false;
         depthLevel["close"].visible = false;
         depthLevel["cure"].visible = false;
         depthLevel["bag"].visible = false;
      }
      
      private function renewUI() : void
      {
         depthLevel["cure"].visible = true;
         depthLevel["bag"].visible = true;
         depthLevel["mc1"].visible = true;
         depthLevel["mc2"].visible = true;
         depthLevel["mc3"].visible = true;
         depthLevel["mc4"].visible = true;
         depthLevel["mc5"].visible = true;
         depthLevel["arrow"].visible = true;
         depthLevel["close"].visible = true;
      }
      
      private function playAnimation() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("PurifyStarDomainS4"),this.stopPlaying);
      }
      
      private function stopPlaying() : void
      {
      }
      
      private function Animation1() : void
      {
         NpcDialog.show(3838,["好疼……我的背……"],["…"],[function():void
         {
            NpcDialog.show(20,["你没事吧？…"],null,null,false,function():void
            {
               NpcDialog.show(3838,["这是什么……翅膀？我有翅膀？对了，那场该死的实验……"],["…"],[function():void
               {
                  NpcDialog.show(3838,["啊啊啊啊！"],["他又发狂了！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("PurifyStarDomainS5"),function():void
                     {
                        NpcDialog.show(20,["原来他本来没有翅膀，是因为一场实验，直接移植了别的精灵的翅膀吗？天呐，真是血腥……"],null,null,false,function():void
                        {
                           MapManager.changeMapWithCallback(1,function():void
                           {
                              SocketConnection.sendByQueue(43768,[21,4],function(param1:*):void
                              {
                                 ModuleManager.showAppModule("PurifyStarDomainMainPanel");
                              });
                           });
                        });
                     });
                  }],false,null,true);
               }],false,null,true);
            });
         }],false,null,true);
      }
      
      private function Animation2() : void
      {
         NpcDialog.show(3838,["我感觉不到我的腿了……我的腿……"],["…"],[function():void
         {
            NpcDialog.show(20,["你放心，我们没有伤害你。你的四条腿都好好的呢！"],null,null,false,function():void
            {
               NpcDialog.show(3838,["四条腿？我怎么会有四条腿？……那只虫子！不……不！"],["他又发狂了！"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("PurifyStarDomainS5"),function():void
                  {
                     NpcDialog.show(20,["这四条腿来自于一只虫子？可是怎么会出现在他的身上？难道……不会吧……"],null,null,false,function():void
                     {
                        MapManager.changeMapWithCallback(1,function():void
                        {
                           SocketConnection.sendByQueue(43768,[21,4],function(param1:*):void
                           {
                              ModuleManager.showAppModule("PurifyStarDomainMainPanel");
                           });
                        });
                     });
                  });
               }],false,null,true);
            });
         }],false,null,true);
      }
      
      private function Animation3() : void
      {
         NpcDialog.show(20,["他的双臂显然经过改造，居然是两把武器。就是不知道是谁这么残忍，武器直接拿在手上不就好了嘛……"],null,null,false,function():void
         {
            NpcDialog.show(3838,["是他们……是他们强迫我接受的改造！他们抓住了我，他们锯掉了我的双手……"],["…"],[function():void
            {
               NpcDialog.show(3838,["啊啊啊啊！"],["他又发狂了！"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("PurifyStarDomainS5"),function():void
                  {
                     NpcDialog.show(20,["竟然是这样！看来他曾经受到过很可怕的虐待……真可怜，我们必须解救他！"],null,null,false,function():void
                     {
                        MapManager.changeMapWithCallback(1,function():void
                        {
                           SocketConnection.sendByQueue(43768,[21,4],function(param1:*):void
                           {
                              ModuleManager.showAppModule("PurifyStarDomainMainPanel");
                           });
                        });
                     });
                  });
               }],false,null,true);
            }],false,null,true);
         });
      }
      
      private function Animation4() : void
      {
         NpcDialog.show(3838,["主人，我……我……"],["…"],[function():void
         {
            NpcDialog.show(3838,["不，你不要过来！"],["他怎么了？"],[function():void
            {
               NpcDialog.show(3828,["显然他的意识还不太清醒。奇怪，一个机器脑袋，怎么会有情感意识？"],["…"],[function():void
               {
                  NpcDialog.show(3838,["让我离开这里！我要离开这里……"],["他怎么了？"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("PurifyStarDomainS5"),function():void
                     {
                        NpcDialog.show(20,["真是一个奇怪的“怪物”，看起来像是一个人为的实验体……究竟是谁，竟然如此残忍！"],null,null,false,function():void
                        {
                           MapManager.changeMapWithCallback(1,function():void
                           {
                              SocketConnection.sendByQueue(43768,[21,4],function(param1:*):void
                              {
                                 ModuleManager.showAppModule("PurifyStarDomainMainPanel");
                              });
                           });
                        });
                     });
                  }],false,null,true);
               }],false,null,true);
            }],false,null,true);
         }],false,null,true);
      }
      
      override public function destroy() : void
      {
         MapObjectControl.hideOrShowAllObjects(true);
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         super.destroy();
      }
   }
}
