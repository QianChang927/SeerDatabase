package com.robot.app.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.filters.GlowFilter;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.BitUtil;
   import org.taomee.utils.DisplayUtil;
   
   public class FightingSpiritOfAFamilyCrisisTaskController
   {
      
      private static var _curStep:int;
      
      private static var _taskMc:MovieClip;
      
      private static var _curSurplusItemNum:int = 8;
      
      private static var _map:BaseMapProcess;
       
      
      public function FightingSpiritOfAFamilyCrisisTaskController()
      {
         super();
      }
      
      public static function initForMap1041(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.topLevel.mouseEnabled = false;
         _map.conLevel["promptMc"].promptBtn.addEventListener(MouseEvent.CLICK,onPromptBtn);
         var _loc2_:int = 0;
         while(_loc2_ < 8)
         {
            _map.conLevel["item_" + _loc2_].addEventListener(MouseEvent.CLICK,onItemBtn);
            _map.conLevel["item_" + _loc2_].buttonMode = true;
            _loc2_++;
         }
         var _loc3_:int = 0;
         while(_loc3_ < 4)
         {
            _map.conLevel["npc_" + _loc3_].addEventListener(MouseEvent.CLICK,onNpcClickBtn);
            _loc3_++;
         }
         update();
      }
      
      private static function onItemBtn(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var index:int = int(event.currentTarget.name.split("_")[1]);
         SocketConnection.addCmdListener(45517,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(45517,arguments.callee);
            update();
         });
         SocketConnection.send(45517,index + 1);
      }
      
      private static function onPromptBtn(param1:MouseEvent) : void
      {
         if(_map.conLevel["promptMc"].promptBtn.filters != null)
         {
            _map.conLevel["promptMc"].promptBtn.filters = null;
            switch(_curStep)
            {
               case 0:
                  CommonUI.addYellowArrow(_map.conLevel,555,65,315);
                  break;
               case 1:
                  CommonUI.addYellowArrow(_map.conLevel,140,150,45);
                  break;
               case 2:
                  CommonUI.addYellowArrow(_map.conLevel,380,250,45);
                  break;
               case 3:
                  CommonUI.addYellowArrow(_map.conLevel,575,270,45);
                  break;
               case 4:
                  ModuleManager.showModule(ClientConfig.getAppModule("FightingSpiritOfAFamilyCrisisPromptPanel"),"正在打开....");
            }
         }
      }
      
      public static function update() : void
      {
         var j:int = 0;
         while(j < 8)
         {
            _map.conLevel["item_" + j].visible = false;
            j++;
         }
         _map.conLevel["promptMc"].promptBtn.filters = [new GlowFilter(16776960,1,10,10,5)];
         KTool.getMultiValue([13545],function(param1:Array):void
         {
            var _loc2_:int = 0;
            var _loc3_:int = 0;
            var _loc4_:int = 0;
            var _loc5_:int = 0;
            if(BitUtil.getBit(param1[0],4) > 0)
            {
               _map.conLevel["npc_" + 1].visible = false;
               _map.conLevel["npc_" + 2].visible = false;
               _map.conLevel["npc_" + 3].visible = false;
               _loc2_ = 0;
               while(_loc2_ < 4)
               {
                  KTool.enableMC([_map.conLevel["npc_" + _loc2_]],false);
                  _loc2_++;
               }
               _map.conLevel["promptMc"].infoMc.visible = true;
               _map.conLevel["promptMc"].txMc.visible = false;
               _loc3_ = 0;
               while(_loc3_ < 4)
               {
                  if(BitUtil.getBit(param1[0],_loc3_) > 0)
                  {
                     _map.conLevel["npc_" + _loc3_].buttonMode = false;
                     KTool.enableMC([_map.conLevel["npc_" + _loc3_]],false);
                     if(_loc3_ == 0)
                     {
                        _map.conLevel["npc_" + 1].visible = true;
                        _map.conLevel["npc_" + 2].visible = true;
                        _map.conLevel["npc_" + 3].visible = true;
                     }
                     if(_loc3_ < 3)
                     {
                        KTool.enableMC([_map.conLevel["npc_" + (_loc3_ + 1)]],true);
                        _map.conLevel["promptMc"].infoMc.gotoAndStop(_loc3_ + 1 + 1);
                        _map.conLevel["npc_" + (_loc3_ + 1)].buttonMode = true;
                        _curStep = _loc3_ + 1;
                     }
                     if(_loc3_ == 3)
                     {
                        _map.conLevel["promptMc"].visible = false;
                        _loc4_ = 0;
                        while(_loc4_ < 4)
                        {
                           _map.conLevel["npc_" + _loc4_].visible = false;
                           _loc4_++;
                        }
                        setIslevelOpen2();
                     }
                  }
                  else
                  {
                     _map.conLevel["promptMc"].visible = true;
                     if(_loc3_ == 0)
                     {
                        _map.conLevel["promptMc"].infoMc.gotoAndStop(_loc3_ + 1);
                        KTool.enableMC([_map.conLevel["npc_" + _loc3_]],true);
                        _map.conLevel["npc_" + _loc3_].buttonMode = true;
                        _curStep = _loc3_;
                     }
                  }
                  _loc3_++;
               }
            }
            else
            {
               _map.conLevel["promptMc"].visible = false;
               _loc5_ = 1;
               while(_loc5_ < 4)
               {
                  _map.conLevel["npc_" + _loc5_].visible = false;
                  _loc5_++;
               }
            }
         });
      }
      
      private static function setIslevelOpen2() : void
      {
         KTool.getMultiValue([13545],function(param1:Array):void
         {
            var j:int = 0;
            var va:Array = param1;
            if(BitUtil.getBit(va[0],5) > 0)
            {
               KTool.getMultiValue([13542],function(param1:Array):void
               {
                  var i:int = 0;
                  var va:Array = param1;
                  if(BitUtil.getBit(va[0],1) > 0)
                  {
                     i = 0;
                     while(i < 8)
                     {
                        _map.conLevel["item_" + i].mouseEnabled = false;
                        _map.conLevel["item_" + i].mouseChildren = false;
                        i++;
                     }
                     _map.conLevel["promptMc"].visible = false;
                  }
                  else
                  {
                     _map.conLevel["promptMc"].visible = true;
                     _map.conLevel["promptMc"].infoMc.visible = false;
                     _map.conLevel["promptMc"].txMc.visible = true;
                     KTool.getMultiValue([13541],function(param1:Array):void
                     {
                        _curSurplusItemNum = 8;
                        var _loc2_:int = 0;
                        while(_loc2_ < 8)
                        {
                           if(BitUtil.getBit(param1[0],_loc2_) > 0)
                           {
                              _map.conLevel["item_" + _loc2_].visible = false;
                              --_curSurplusItemNum;
                           }
                           else
                           {
                              _map.conLevel["item_" + _loc2_].visible = true;
                           }
                           _loc2_++;
                        }
                     });
                     KTool.getMultiValue([13543],function(param1:Array):void
                     {
                        var va:Array = param1;
                        var num:int = int(va[0]);
                        if(_map.conLevel["promptMc"].txMc.itemNumTx != null)
                        {
                           _map.conLevel["promptMc"].txMc.itemNumTx.text = num + "/" + 16;
                        }
                        if(num >= 16)
                        {
                           update();
                           ModuleManager.showModule(ClientConfig.getAppModule("FightingSpiritOfAFamilyCrisisMainPanel"),"正在打开....");
                        }
                        else if(num >= 8 && num < 16)
                        {
                           if(_curSurplusItemNum == 0)
                           {
                              SocketConnection.addCmdListener(45517,function(param1:SocketEvent):void
                              {
                                 SocketConnection.removeCmdListener(45517,arguments.callee);
                                 update();
                              });
                              SocketConnection.send(45517,9);
                           }
                        }
                     });
                     _curStep = 4;
                  }
               });
            }
            else
            {
               j = 0;
               while(j < 8)
               {
                  _map.conLevel["item_" + j].visible = false;
                  j++;
               }
               _map.conLevel["promptMc"].visible = false;
            }
         });
      }
      
      private static function onNpcClickBtn(param1:MouseEvent) : void
      {
         var index:String = null;
         var event:MouseEvent = param1;
         index = String(event.currentTarget.name.split("_")[1]);
         KTool.getMultiValue([13543],function(param1:Array):void
         {
            var va:Array = param1;
            if(BitUtil.getBit(va[0],3) > 0)
            {
               NpcDialog.show(NPC.SEER,["似乎不是找他。"],["好！","我再四处看看。"],[function():void
               {
               }]);
            }
            else
            {
               switch(index)
               {
                  case "0":
                     ResourceManager.getResource(ClientConfig.getMapAnimate("map_1041_fightingSpiritOfAFamilyCrisis"),function(param1:MovieClip):void
                     {
                        taskMc = param1;
                        _map.conLevel.addChild(taskMc);
                        startPreTask1();
                     });
                     break;
                  case "1":
                     startPreTask2();
                     break;
                  case "2":
                     startPreTask3();
                     break;
                  case "3":
                     startPreTask4();
               }
            }
         });
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function startPreTask1() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         CommonUI.removeYellowArrow(_map.conLevel);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.SHANGUANG_GANGYA,["这个宝物里有一股强大的力量，是什么呢？"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHANGUANG_GANGYA,["我得去问一问傲视战魂。"],null]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            DisplayUtil.removeForParent(taskMc);
            _taskMc = null;
            SocketConnection.addCmdListener(45517,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(45517,arguments.callee);
               update();
            });
            SocketConnection.send(45517,16);
         };
         storyPlayer.start();
      }
      
      private static function startPreTask2() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         CommonUI.removeYellowArrow(_map.conLevel);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.DIALOG,[NPC.SHANGUANG_GANGYA,["战魂一族的宝物果然不同凡响，里面为什么有好强大的能量。你们为什么现在突然要加强对它的保护呢？"],null]],[TaskStoryPlayer.DIALOG,[NPC.AO_SHI_ZHAN_HUN,["我们族的传世之宝叫做斗天之石，传说是当年宇宙混沌初开时，我们战魂一族的祖先就有的宝物。经过一代一代的传承，这斗天之石也就吸收了我们战魂一族每一代的力量，所以才这般充满力量。"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHANGUANG_GANGYA,["你们为什么现在突然要加强对它的保护呢？"],null]],[TaskStoryPlayer.DIALOG,[NPC.AO_SHI_ZHAN_HUN,["我们收到风声说有人要窃取斗天之石，所以最近才加强了巡视，而且由我亲自来保护。"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHANGUANG_GANGYA,["哇！好棒哦，我也想保护这宝物。"],null]],[TaskStoryPlayer.DIALOG,[NPC.AO_SHI_ZHAN_HUN,["哼！见钱眼开！你和那边那两个人一样，都是想窃取我们的宝物。"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHANGUANG_GANGYA,["怎么会呢？我都不认识他们，况且我也不想偷你的宝物。我是想保护它啊。"],null]],[TaskStoryPlayer.DIALOG,[NPC.AO_SHI_ZHAN_HUN,["哼！走开，我不想和你说话！"],null]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            SocketConnection.addCmdListener(45517,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(45517,arguments.callee);
               update();
            });
            SocketConnection.send(45517,17);
         };
         storyPlayer.start();
      }
      
      private static function startPreTask3() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         CommonUI.removeYellowArrow(_map.conLevel);
         _map.depthLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         story = [[TaskStoryPlayer.DIALOG,[NPC.SHANGUANG_GANGYA,["你为什么要来找傲视战神呢？"],["我想我没必要和你解释吧？"]]],[TaskStoryPlayer.DIALOG,[NPC.RUIERSI,["天下谁敢和我匹敌力量？当然了….这次就当还白虎一个人情。"],["哇！你的力量比盖亚还要强吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.SHANGUANG_GANGYA,["好想看你们打一场！！"],["笨蛋！我是盖亚的亲哥哥！"]]],[TaskStoryPlayer.DIALOG,[NPC.RUIERSI,["还有别的事情吗？我要继续修炼等着先击败这个傲世战魂！你就等着看吧！"],["好的！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            SocketConnection.addCmdListener(45517,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(45517,arguments.callee);
               update();
            });
            SocketConnection.send(45517,18);
         };
         storyPlayer.start();
      }
      
      private static function startPreTask4() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         CommonUI.removeYellowArrow(_map.conLevel);
         _map.depthLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         story = [[TaskStoryPlayer.DIALOG,[NPC.SHANGUANG_GANGYA,["你为什么要来找傲视战神呢？"],["简单点说，是陪着哥哥一起。"]]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA,["如果从一方面说，我想跟着哥哥多学习一些。"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHANGUANG_GANGYA,["你已经是战神盖亚了！"],["哈哈，你错了。"]]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA,["战神，只是称号，但并不代表力量的巅峰。我希望可以寻找到力量的巅峰！"],["悄悄问你个事情！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHANGUANG_GANGYA,["你和你哥哥谁更厉害？"],["这个嘛。。。都比你厉害~"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            SocketConnection.addCmdListener(45517,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(45517,arguments.callee);
               update();
            });
            SocketConnection.send(45517,19);
            SocketConnection.send(45517,15);
         };
         storyPlayer.start();
      }
      
      public static function setLeve_1OPen() : void
      {
         SocketConnection.addCmdListener(45517,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(45517,arguments.callee);
            update();
         });
         SocketConnection.send(45517,20);
      }
      
      public static function setLeve1AllComPlete() : void
      {
         var i:int;
         SocketConnection.addCmdListener(45517,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(45517,arguments.callee);
            update();
         });
         i = 0;
         while(i < 5)
         {
            SocketConnection.send(45517,16 + i);
            i++;
         }
      }
      
      public static function setLeve_2OPen() : void
      {
         SocketConnection.addCmdListener(45517,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(45517,arguments.callee);
            update();
         });
         SocketConnection.send(45517,21);
      }
      
      public static function setLeve2AllComPlete() : void
      {
         SocketConnection.addCmdListener(45517,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(45517,arguments.callee);
            update();
         });
         SocketConnection.send(45517,21);
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 1041)
         {
            KTool.showMapAllPlayerAndMonster();
            _map = null;
         }
      }
   }
}
