package com.robot.app.task.taskscollection
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1070
   {
      
      public static const TASK_ID:int = 1070;
       
      
      public function Task1070()
      {
         super();
      }
      
      public static function initForMap733(param1:BaseMapProcess) : void
      {
         var mc:MovieClip = null;
         var onShow:Function = null;
         var onShow2:Function = null;
         var b:BaseMapProcess = param1;
         var setBtn:Function = function(param1:Boolean):void
         {
            var btn1:SimpleButton = null;
            var btn0:MovieClip = null;
            var show:Boolean = param1;
            btn1 = b.conLevel["btn_1"];
            btn0 = b.conLevel["btn_0"];
            btn0.mouseChildren = false;
            btn0.addEventListener(MouseEvent.CLICK,onShow2);
            ToolTipManager.add(btn0,"星灵王");
            btn0.buttonMode = true;
            if(show)
            {
               btn1.addEventListener(MouseEvent.CLICK,onShow);
               ToolTipManager.add(btn1,"贪狼封印");
               MapManager.addEventListener(MapEvent.MAP_DESTROY,function():void
               {
                  MapManager.removeEventListener(MapEvent.MAP_DESTROY,arguments.callee);
                  btn1.removeEventListener(MouseEvent.CLICK,onShow);
                  btn0.removeEventListener(MouseEvent.CLICK,onShow2);
                  ToolTipManager.remove(btn1);
                  ToolTipManager.remove(btn0);
               });
            }
            else
            {
               DisplayUtil.removeForParent(btn1);
               MapManager.addEventListener(MapEvent.MAP_DESTROY,function():void
               {
                  MapManager.removeEventListener(MapEvent.MAP_DESTROY,arguments.callee);
                  btn0.removeEventListener(MouseEvent.CLICK,onShow2);
                  ToolTipManager.remove(btn0);
               });
            }
         };
         onShow = function(param1:MouseEvent):void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("triones/TrionesFirstPanel"),"正在打开贪狼面板....");
         };
         onShow2 = function(param1:MouseEvent):void
         {
            var e:MouseEvent = param1;
            if(!BufferRecordManager.getState(MainManager.actorInfo,544))
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20130208001"),function():void
               {
                  BufferRecordManager.setState(MainManager.actorInfo,544,true);
                  NpcDialog.show(NPC.SEER,["好强大的能量，这就是传说中星灵王的力量吗？"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.XINGLINGWANG_SITAKE,["我已沉睡了千年！谁将是我宿命之人！"],["召唤星灵王"],[function():void
                     {
                     }]);
                  });
               });
            }
            else
            {
               NpcDialog.show(NPC.XINGLINGWANG_SITAKE,["我已沉睡了千年！谁将是我宿命之人！"],["召唤星灵王"],[function():void
               {
               }]);
            }
         };
         mc = b.conLevel["mainMC"];
         if(TasksManager.getTaskStatus(1071) == TasksManager.COMPLETE)
         {
            mc.gotoAndStop(5);
            setBtn(false);
         }
         else if(TasksManager.getTaskStatus(TASK_ID) != TasksManager.COMPLETE)
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1070_1"),function():void
            {
               NpcDialog.show(NPC.XINGLINGWANG,[MainManager.actorInfo.formatNick + "，你什么时候才能出现！我已经整整等了一万年！难道没人能帮我解开七星连锁阵吗？"],[MainManager.actorInfo.nick + "？这不就是我的名字吗？"],[function():void
               {
                  NpcDialog.show(NPC.XINGLINGWANG,["什么！？你就是预言中的" + MainManager.actorInfo.formatNick + "吗?这不可能！难道我需要你这样一个破铁皮来拯救？我不信！这不是真的！"],["我还不想救你呢！别激动！"],[function():void
                  {
                     AnimateManager.playMcAnimate(mc,2,"mc",function():void
                     {
                        NpcDialog.show(NPC.HUOXINGLING,["整整一万年！终于等到了！我们七个使用七星链锁将它封印，目的是压制住星灵王！如今预言的有缘人已经出现，相信你能完美地掌控这股神秘力量！"],["哇！听起来真棒！"],[function():void
                        {
                           NpcDialog.show(NPC.HUOXINGLING,["拥有神秘力量前，你必须解开七星链锁的封印！七道封印全部解除之时，就是你完全拥有星灵王之日！我是守护第一道贪狼封印的火星灵，赶紧想办法解封吧！"],["好！明白了!"],[function():void
                           {
                              AnimateManager.playMcAnimate(mc,3,"mc",function():void
                              {
                                 CommonUI.addYellowArrow(b.conLevel,350,100,300);
                                 TasksManager.accept(TASK_ID,function():void
                                 {
                                    TasksManager.complete(TASK_ID,0);
                                 });
                                 setBtn(true);
                              });
                           }]);
                        }]);
                     });
                  }]);
               }]);
            });
         }
         else
         {
            setBtn(true);
         }
      }
   }
}
