package com.robot.app.task.taskscollection
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.RectangleMask;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Rectangle;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.utils.DisplayUtil;
   
   public class Task86
   {
      
      private static const ID:uint = 86;
      
      private static var _map:BaseMapProcess;
      
      private static var _fight:MovieClip;
      
      private static var _choice:MovieClip;
      
      private static var _catch:MovieClip;
      
      public static var isInGuide:Boolean;
       
      
      public function Task86()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(ID) == TasksManager.UN_ACCEPT)
         {
            TasksManager.accept(ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  startPro();
               }
            });
         }
         else if(TasksManager.getTaskStatus(ID) == TasksManager.ALR_ACCEPT)
         {
            startPro();
         }
      }
      
      private static function startPro() : void
      {
         NpcDialog.show(NPC.SEER,["博士要我来帮忙找资料，我竟然睡着了，啊啊！我又梦到雷伊、盖亚、卡修斯、布莱克了，呼呼，他们都好厉害啊！我的偶像！"],["神奇的精灵，我一定会和你们成为朋友的！哈哈！"],[function():void
         {
            SocketConnection.send(1020,103);
            AnimateManager.playMcAnimate(_map.topLevel["haidao"],1,"mc_1",function():void
            {
               SocketConnection.send(1020,104);
               NpcDialog.show(NPC.PIRATE_2,["嘿嘿，趁博士不在，我一定要从这里搜集些有用的资料带给佐格和艾里逊大人！"],["呀！有海盗！"],[function():void
               {
                  SocketConnection.send(1020,105);
                  AnimateManager.playMcAnimate(_map.topLevel["haidao"],2,"mc_2",function():void
                  {
                     SocketConnection.send(1020,106);
                     NpcDialog.show(NPC.PIRATE_2,["咦？哪里冒出来的赛尔。小家伙，既然你知道全宇宙最厉害就是我们海盗集团，还不赶紧给我跑得远远的！"],["切，我可没说你们厉害，你们欧比组织是闻名宇宙的超级大笨蛋！"],[function():void
                     {
                        SocketConnection.send(1020,107);
                        NpcDialog.show(NPC.PIRATE_2,["好家伙，竟敢口出狂言，看我不教训教训你！接招……"],["谁怕谁啊！"],[function():void
                        {
                           SocketConnection.send(1020,108);
                           AnimateManager.playMcAnimate(_map.topLevel["nono"],0,"",function():void
                           {
                              SocketConnection.send(1020,109);
                              AnimateManager.playMcAnimate(_map.topLevel["huohou"],2,"mc_2",function():void
                              {
                                 SocketConnection.send(1020,110);
                                 NpcDialog.show(NPC.HUOHOU,["我最讨厌海盗啦！竟然鬼鬼祟祟跑到基地来！" + MainManager.actorInfo.formatNick + "，快和我一起作战，打跑海盗！"],["额……"],[function():void
                                 {
                                    SocketConnection.send(1020,111);
                                    startFight();
                                 }]);
                              });
                           });
                        }]);
                     }]);
                  });
               }]);
            });
         }]);
      }
      
      private static function startFight() : void
      {
         var id:uint = 0;
         _fight = MapManager.currentMap.libManager.getMovieClip("Fight_ui");
         LevelManager.appLevel.addChild(_fight);
         id = setTimeout(function():void
         {
            clearTimeout(id);
            RectangleMask.mask(new Rectangle(136,463,145,81),"",1,ClientConfig.getResPath("forApp/NewSeerTask.swf"));
            _fight["skill"].addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
            {
               _fight["skill"].removeEventListener(MouseEvent.CLICK,arguments.callee);
               RectangleMask.destroy();
               SocketConnection.send(1020,112);
               AnimateManager.playMcAnimate(_fight,0,"",fightOver);
            });
         },1000);
      }
      
      private static function fightOver() : void
      {
         DisplayUtil.removeForParent(_fight);
         _fight = null;
         DisplayUtil.removeForParent(_map.topLevel["haidao"]);
         DisplayUtil.removeForParent(_map.topLevel["nono"]);
         DisplayUtil.removeForParent(_map.topLevel["huohou"]);
         SocketConnection.send(1020,113);
         AnimateManager.playMcAnimate(_map.topLevel["fight"],0,"",function():void
         {
            SocketConnection.send(1020,114);
            NpcDialog.show(NPC.SUPERNONO,["好险……好险！幸亏有精灵帮忙！不然还不知道会发生什么呢！"],["哇！超能NONO，赛尔的最佳搭档！"],[function():void
            {
               SocketConnection.send(1020,115);
               NpcDialog.show(NPC.SUPERNONO,[MainManager.actorInfo.formatNick + "，你还是实习生吧，别着急，等你成为正式船员，发明家肖恩就会送你一个属于你的专属NONO！"],["嗯嗯，我已经等不及了！"],[function():void
               {
                  DisplayUtil.removeForParent(_map.topLevel["fight"]);
                  SocketConnection.send(1020,116);
                  AnimateManager.playMcAnimate(_map.topLevel["boshi"],2,"mc_2",function():void
                  {
                     SocketConnection.send(1020,117);
                     NpcDialog.show(NPC.SUPERNONO,["博士！博士！你刚才不在，海盗竟然潜入基地想偷取你的资料呢！！哼哼！还好有" + MainManager.actorInfo.formatNick + "帮忙！"],["哈哈，我可是英勇无畏的赛尔，虽然还在实习中……"],[function():void
                     {
                        SocketConnection.send(1020,118);
                        NpcDialog.show(NPC.DOCTOR,[MainManager.actorInfo.formatNick + "，你这个实习生用精灵对战把海盗给赶走了？哇哦，天才！天才呀！"],["天才这个称号太棒啦！谢谢咯，博士，哈哈哈！"],[function():void
                        {
                           SocketConnection.send(1020,119);
                           NpcDialog.show(NPC.DOCTOR,["哈哈！我喜欢你的幽默感，好吧！你已经通过了考验，现在是正式船员啦！在这三个小家伙里选择一个作为伙伴吧！"],["啊啊啊啊！真的吗？我会加油的！我一定能够成为优秀的赛尔战士！"],[function():void
                           {
                              SocketConnection.send(1020,120);
                              AnimateManager.playMcAnimate(_map.topLevel["boshi"],3,"mc_3",function():void
                              {
                                 SocketConnection.send(1020,121);
                                 choicePet();
                              });
                           }]);
                        }]);
                     }]);
                  });
               }]);
            }]);
         });
      }
      
      private static function choicePet() : void
      {
         _choice = MapManager.currentMap.libManager.getMovieClip("ChoicePet_ui");
         LevelManager.appLevel.addChild(_choice);
         _choice["pet_1_1"].addEventListener(MouseEvent.CLICK,onChoicePet);
         _choice["pet_2_7"].addEventListener(MouseEvent.CLICK,onChoicePet);
         _choice["pet_3_4"].addEventListener(MouseEvent.CLICK,onChoicePet);
         _choice["pet_1_1"].addEventListener(MouseEvent.MOUSE_OVER,onOver);
         _choice["pet_2_7"].addEventListener(MouseEvent.MOUSE_OVER,onOver);
         _choice["pet_3_4"].addEventListener(MouseEvent.MOUSE_OVER,onOver);
      }
      
      private static function onOver(param1:MouseEvent) : void
      {
         param1.target.parent.addChild(param1.target);
      }
      
      private static function onChoicePet(param1:MouseEvent) : void
      {
         var btn:SimpleButton;
         var id:uint;
         var index:uint = 0;
         var e:MouseEvent = param1;
         _choice.mouseEnabled = false;
         _choice.mouseChildren = false;
         btn = e.currentTarget as SimpleButton;
         index = uint(btn.name.split("_")[1]);
         id = uint(btn.name.split("_")[2]);
         Alert.show("确定要选择" + TextFormatUtil.getRedTxt(PetXMLInfo.getName(id)) + "一起冒险旅行吗？",function():void
         {
            DisplayUtil.removeForParent(_choice);
            _choice["pet_1_1"].removeEventListener(MouseEvent.CLICK,onChoicePet);
            _choice["pet_2_7"].removeEventListener(MouseEvent.CLICK,onChoicePet);
            _choice["pet_3_4"].removeEventListener(MouseEvent.CLICK,onChoicePet);
            _choice["pet_1_1"].removeEventListener(MouseEvent.MOUSE_OVER,onOver);
            _choice["pet_2_7"].removeEventListener(MouseEvent.MOUSE_OVER,onOver);
            _choice["pet_3_4"].removeEventListener(MouseEvent.MOUSE_OVER,onOver);
            _choice = null;
            SocketConnection.send(1020,122);
            _map.topLevel["boshi"].gotoAndStop(index + 3);
            _catch = MapManager.currentMap.libManager.getMovieClip("Catch_" + index);
            LevelManager.appLevel.addChild(_catch);
            AnimateManager.playMcAnimate(_catch,0,"",function():void
            {
               DisplayUtil.removeForParent(_catch);
               _catch.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               _catch = null;
               SocketConnection.send(1020,123);
               TasksManager.complete(ID,0,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     changeMap();
                     MainManager.actorInfo.petMaxLev = 10;
                  }
               },false,index);
            });
         },function():void
         {
            _choice.mouseEnabled = true;
            _choice.mouseChildren = true;
         });
      }
      
      private static function changeMap() : void
      {
         NpcDialog.show(NPC.DOCTOR,[MainManager.actorInfo.formatNick + "，你真是好样的！现在去发明室吧，肖恩会送给你专属NONO作为新搭档，然后再到实验室找我，还有一份神秘礼物等着你哦！"],["嗯，谢谢博士，我这就去发明室。"],[function():void
         {
            SocketConnection.send(1020,124);
            RectangleMask.mask(new Rectangle(438,496,84,64),"",2,ClientConfig.getResPath("forApp/NewSeerTask.swf"));
            isInGuide = true;
            RectangleMask.addEventListener(RectangleMask.GOTO_NEXT,function(param1:Event):void
            {
               RectangleMask.removeEventListener(RectangleMask.GOTO_NEXT,arguments.callee);
               SocketConnection.send(1020,125);
               RectangleMask.destroy();
            });
         }]);
      }
      
      public static function destory() : void
      {
         _map = null;
      }
   }
}
