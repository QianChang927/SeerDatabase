package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class ForcePillTask3Controller
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskMc:MovieClip;
      
      private static const bitBuffCode:int = 22630;
      
      private static var _status:int = 0;
       
      
      public function ForcePillTask3Controller()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         KTool.getMultiValue([5241],function(param1:Array):void
         {
            var values:Array = param1;
            _status = values[0];
            SocketConnection.send(1022,86070391);
            LevelManager.iconLevel.visible = false;
            ToolBarController.panel.visible = false;
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            _map = map;
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_10805_0"),function(param1:MovieClip):void
            {
               taskMc = param1;
               addEvent();
               _map.conLevel.addChild(taskMc);
               taskMc.gotoAndStop(1);
            });
         });
      }
      
      private static function preAnim() : void
      {
         if(!BitBuffSetClass.getState(bitBuffCode))
         {
            AnimateManager.playMcAnimate(taskMc,2,"mc",function():void
            {
               BitBuffSetClass.setState(bitBuffCode,1,function():void
               {
                  taskMc.gotoAndStop(5);
               });
            });
         }
         else if(Boolean(BitBuffSetClass.getState(22631)) && Boolean(BitBuffSetClass.getState(22632)) && Boolean(BitBuffSetClass.getState(22633)) && Boolean(BitBuffSetClass.getState(22634)) && _status < 3)
         {
            AnimateManager.playMcAnimate(taskMc,6,"mc",function():void
            {
               SocketConnection.sendWithCallback(43164,function(param1:SocketEvent):void
               {
                  openModule();
               },3);
            });
         }
         else
         {
            taskMc.gotoAndStop(5);
         }
      }
      
      private static function addEvent() : void
      {
         taskMc.addEventListener(MouseEvent.CLICK,onClickHandler);
      }
      
      protected static function onClickHandler(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         if(_loc2_ == "btnClose")
         {
            openModule();
         }
         else if(_loc2_ == "btnGo")
         {
            preAnim();
         }
         else if(_loc2_ == "btnChloe")
         {
            taskMc.gotoAndStop(4);
            chloeDialog();
         }
         else if(_loc2_ == "btnChloeBrother")
         {
            taskMc.gotoAndStop(3);
            chloeBrotherDialog();
         }
      }
      
      private static function chloeDialog() : void
      {
         if(Boolean(BitBuffSetClass.getState(22631)) && Boolean(BitBuffSetClass.getState(22632)))
         {
            NpcDialog.show(NPC.KE_LUO_YI_SUPER,["我会考虑你的看法的，感谢你陌生人！"],["不客气"],[function():void
            {
               taskMc.gotoAndStop(5);
            }]);
         }
         else
         {
            taskMc["mcBar"].visible = false;
            if(!BitBuffSetClass.getState(22631) && !BitBuffSetClass.getState(22632))
            {
               NpcDialog.show(NPC.KE_LUO_YI_SUPER,["你好，陌生人！"],["你是至高无上的神谕之子！","你弟弟你想来夺取你神谕之子的位置"],[function():void
               {
                  showDialog(getChloeTalkList1(),22631);
               },function():void
               {
                  showDialog(getChloeTalkList2(),22632);
               }]);
            }
            else if(!BitBuffSetClass.getState(22631))
            {
               NpcDialog.show(NPC.KE_LUO_YI_SUPER,["你好，陌生人！"],["你是至高无上的神谕之子！"],[function():void
               {
                  showDialog(getChloeTalkList1(),22631);
               }]);
            }
            else
            {
               NpcDialog.show(NPC.KE_LUO_YI_SUPER,["你好，陌生人！"],["你弟弟你想来夺取你神谕之子的位置"],[function():void
               {
                  showDialog(getChloeTalkList2(),22632);
               }]);
            }
         }
      }
      
      private static function showDialog(param1:Array, param2:int) : void
      {
         var list:Array = param1;
         var bit:int = param2;
         taskMc["mcBar"].visible = false;
         TaskDiaLogManager.single.playStory(list,function():void
         {
            taskMc["mcBar"].visible = true;
            BitBuffSetClass.setState(bit,1,function():void
            {
               if(Boolean(BitBuffSetClass.getState(22631)) && Boolean(BitBuffSetClass.getState(22632)) && Boolean(BitBuffSetClass.getState(22633)) && Boolean(BitBuffSetClass.getState(22634)))
               {
                  AnimateManager.playMcAnimate(taskMc,6,"mc",function():void
                  {
                     if(_status < 3)
                     {
                        SocketConnection.sendWithCallback(43164,function(param1:SocketEvent):void
                        {
                           openModule();
                        },3);
                     }
                     else
                     {
                        openModule();
                     }
                  });
               }
               else
               {
                  taskMc.gotoAndStop(5);
               }
            });
         });
      }
      
      private static function openModule() : void
      {
         var onSwitchMap:Function = null;
         if(MapManager.currentMap.id == 1053)
         {
            ModuleManager.showAppModule("ForcePillMainPanel");
         }
         else
         {
            onSwitchMap = function(param1:MapEvent):void
            {
               ModuleManager.showAppModule("ForcePillMainPanel");
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
            };
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
            MapManager.changeMap(1053);
         }
      }
      
      private static function chloeBrotherDialog() : void
      {
         if(Boolean(BitBuffSetClass.getState(22633)) && Boolean(BitBuffSetClass.getState(22634)))
         {
            NpcDialog.show(NPC.KELUOYI_DIDI,["我会考虑你的看法的，感谢你陌生人！"],["不客气"],[function():void
            {
               taskMc.gotoAndStop(5);
            }]);
         }
         else if(!BitBuffSetClass.getState(22633) && !BitBuffSetClass.getState(22634))
         {
            NpcDialog.show(NPC.KELUOYI_DIDI,["你找我干什么？"],["你永远都只是克洛伊的影子！","你哥哥根本看不起你！"],[function():void
            {
               showDialog(getChloeBrotherTalkList1(),22633);
            },function():void
            {
               showDialog(getChloeBrotherTalkList2(),22634);
            }]);
         }
         else if(!BitBuffSetClass.getState(22633))
         {
            NpcDialog.show(NPC.KELUOYI_DIDI,["你找我干什么？"],["你永远都只是克洛伊的影子！"],[function():void
            {
               showDialog(getChloeBrotherTalkList1(),22633);
            }]);
         }
         else
         {
            NpcDialog.show(NPC.KELUOYI_DIDI,["你找我干什么？"],["你哥哥根本看不起你！"],[function():void
            {
               showDialog(getChloeBrotherTalkList2(),22634);
            }]);
         }
      }
      
      private static function getChloeTalkList1() : Array
      {
         var _loc1_:Array = [];
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KE_LUO_YI_SUPER,["我没有至高无上，我只是做好了我该做的事！"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YINXINGCHIKE,["我听说的事情可不是这样！ "],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KE_LUO_YI_SUPER,["哦？那你听说的事情是怎么样的？"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YINXINGCHIKE,["自从咤克斯出现以来，全宇宙的生命都人人自危，人心惶惶。大家都害怕得不敢出门。"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KE_LUO_YI_SUPER,["还有呢？"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YINXINGCHIKE,["您组建了神谕天启军这支伟大的军队来对抗邪恶！招募了最厉害的勇士，打算将邪恶彻底摧毁。"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KE_LUO_YI_SUPER,["有点意思，继续。"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YINXINGCHIKE,["你是神谕天启军的首领，一人之下，万人之上，指挥着全军万马。试问除了您有这样的气魄，还能有谁？"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KE_LUO_YI_SUPER,["哈哈哈，说得很有道理啊！"],null));
         return _loc1_;
      }
      
      private static function getChloeTalkList2() : Array
      {
         var _loc1_:Array = [];
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KE_LUO_YI_SUPER,["你胡说！我弟弟怎么会有这样的想法！"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YINXINGCHIKE,["你想想你真是你弟弟吗？ "],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KE_LUO_YI_SUPER,["虽然是同父异母的兄弟，但是我们情同手足！"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YINXINGCHIKE,["他心里可不会这么想。你好好想想你们同是兄弟，你贵为神谕之子，而他却什么都不是，所以他肯定不平衡。"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YINXINGCHIKE,["对权力的渴望是会让人发疯的，他一定会垂涎你的位置。这也就是他来投奔你的原因"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KE_LUO_YI_SUPER,["我不信！"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YINXINGCHIKE,["不信的话，你可以观察一下他，看他会否有异常。"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YINXINGCHIKE,["大丈夫，做事应当果断，对于这样的后患应当“快刀斩乱麻”才是！"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KE_LUO_YI_SUPER,["……"],null));
         return _loc1_;
      }
      
      private static function getChloeBrotherTalkList1() : Array
      {
         var _loc1_:Array = [];
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KELUOYI_DIDI,["怎么可能，我是我，克洛伊是克洛伊！"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YINXINGCHIKE,["那你好好想想你和你哥哥都是兄弟，为什么他贵为神谕之子，而你却什么都不是。"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KELUOYI_DIDI,["对啊，我和克洛伊是兄弟，为什么差别这么大呢！"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YINXINGCHIKE,["而且，他作为神谕之子受万人敬仰，而你呢，甚至都没有人知道你是谁！"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KELUOYI_DIDI,["说的对！"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YINXINGCHIKE,["你和他的能力差不多，但是现在的地位却毫不相等，你真的甘心做他的影子吗？"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KELUOYI_DIDI,["一点都不甘心，为什么我和他能力差不多，地位却差别这么远！"],null));
         return _loc1_;
      }
      
      private static function getChloeBrotherTalkList2() : Array
      {
         var _loc1_:Array = [];
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KELUOYI_DIDI,["我哥哥怎么可能看不起我呢？你别乱说！"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YINXINGCHIKE,["虽然让你留在神谕天启军，但是你却连个将军都不是！"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KELUOYI_DIDI,["对啊，为什么会这样！"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YINXINGCHIKE,["而且你的能力并不差克洛伊，但是却没有人知道你，而且有人说你是因为克洛伊的关系才混入神谕天启军的。"],null));
         return _loc1_;
      }
      
      public static function destroy() : void
      {
         _map = null;
         taskMc = null;
         LevelManager.iconLevel.visible = true;
         KTool.showMapAllPlayerAndMonster(true);
         MapObjectControl.hideOrShowAllObjects(true);
         ToolBarController.panel.visible = true;
      }
   }
}
