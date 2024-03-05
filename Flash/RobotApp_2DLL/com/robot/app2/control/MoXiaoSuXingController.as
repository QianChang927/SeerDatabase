package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MoXiaoSuXingController
   {
      
      private static var taskMC:MovieClip;
      
      private static var _inStory:Boolean;
      
      private static var _map:BaseMapProcess;
      
      private static var _playStartSteps:Array = [0,10,17];
      
      private static var step:int = 0;
      
      private static var lastDamageNum:int;
       
      
      public function MoXiaoSuXingController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(!BufferRecordManager.getMyState(906))
         {
            KTool.hideMapPlayerAndMonster();
            _map.conLevel["mcNPC"].visible = false;
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_939_3"),function(param1:MovieClip):void
            {
               taskMC = param1;
               _map.btnLevel.addChild(param1);
               MapObjectControl.hideOrShowAllObjects(false);
               playPreStory();
            });
            SocketConnection.send(1022,86064376);
         }
         else
         {
            addEvent();
         }
      }
      
      private static function addEvent() : void
      {
         _map.conLevel["mcNPC"]["mcNuokailasi"].addEventListener(MouseEvent.CLICK,onClickNuokailsiHandler);
         _map.conLevel["mcNPC"]["mcAkexiya"].addEventListener(MouseEvent.CLICK,onClickAkexiyaHandler);
         _map.conLevel["mcNPC"]["mcNaduolei"].addEventListener(MouseEvent.CLICK,onClickNaduoleiHandler);
         _map.conLevel["mcNPC"]["mcLeinaduo"].addEventListener(MouseEvent.CLICK,onClickLeinaduoHandler);
         _map.conLevel["mcNPC"]["mcGaiya"].addEventListener(MouseEvent.CLICK,onClickGaiyaHandler);
         MovieClip(_map.conLevel["mcNPC"]).buttonMode = true;
      }
      
      private static function removeEvent() : void
      {
         if(_map)
         {
            _map.conLevel["mcNPC"]["mcNuokailasi"].removeEventListener(MouseEvent.CLICK,onClickNuokailsiHandler);
            _map.conLevel["mcNPC"]["mcAkexiya"].removeEventListener(MouseEvent.CLICK,onClickAkexiyaHandler);
            _map.conLevel["mcNPC"]["mcNaduolei"].removeEventListener(MouseEvent.CLICK,onClickNaduoleiHandler);
            _map.conLevel["mcNPC"]["mcLeinaduo"].removeEventListener(MouseEvent.CLICK,onClickLeinaduoHandler);
            _map.conLevel["mcNPC"]["mcGaiya"].removeEventListener(MouseEvent.CLICK,onClickGaiyaHandler);
         }
      }
      
      protected static function onClickGaiyaHandler(param1:MouseEvent) : void
      {
         var figthwithGaiya:Function = null;
         var onFightOverHandler:Function = null;
         var event:MouseEvent = param1;
         figthwithGaiya = function():void
         {
            KTool.getForeverNum(4057,function(param1:int):void
            {
               var value:int = param1;
               if(value >= 10000)
               {
                  Alarm.show("你已经完成了任务！");
                  return;
               }
               ItemManager.upDateCollection(1700254,function():void
               {
                  var num:int = int(ItemManager.getNumByID(1700254));
                  if(num < 3)
                  {
                     Alarm.show("每次挑战需要消耗魔枭之力3个，击败场景内野怪卡瓦内（两种形态都掉落道具）100%" + TextFormatUtil.getRedTxt("获得魔枭之力X1"));
                  }
                  else
                  {
                     KTool.getForeverNum(4057,function(param1:int):void
                     {
                        lastDamageNum = param1;
                        FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
                        SocketConnection.send(CommandID.VANISH_AIR_BRICK_CHALLENGE,31);
                     });
                  }
               });
            });
         };
         onFightOverHandler = function(param1:PetFightEvent):void
         {
            var event:PetFightEvent = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
            KTool.getForeverNum(4057,function(param1:int):void
            {
               Alarm.show("你刚刚对战神盖亚造成了" + (param1 - lastDamageNum) + "点伤害！");
               lastDamageNum = param1;
            });
         };
         NpcDialog.show(NPC.GAIYA,["上古魔枭，放马过来吧，让我看看你的实力是不是像你吹嘘得那么强！"],["我要挑战你!","待会儿再来吧！"],[figthwithGaiya]);
      }
      
      protected static function onClickLeinaduoHandler(param1:MouseEvent) : void
      {
         var figthwithLeinaduo:Function = null;
         var event:MouseEvent = param1;
         figthwithLeinaduo = function():void
         {
            FightManager.fightWithBoss("雷纳多",30);
         };
         NpcDialog.show(NPC.LEINADUO,["战胜我就可以获得0xff0000纯净能量0xffffff——进化成为机械系精灵诺凯尔的必备道具！"],["我要挑战你!","待会儿再来吧！"],[figthwithLeinaduo]);
      }
      
      protected static function onClickNaduoleiHandler(param1:MouseEvent) : void
      {
         var figthwithNaduolei:Function = null;
         var event:MouseEvent = param1;
         figthwithNaduolei = function():void
         {
            FightManager.fightWithBoss("纳多雷",29);
         };
         NpcDialog.show(NPC.NADUOLEI,["战胜我就可以获得0xff0000大地能量0xffffff——进化成为地面系精灵诺克斯的必备道具！"],["我要挑战你!","待会儿再来吧！"],[figthwithNaduolei]);
      }
      
      protected static function onClickAkexiyaHandler(param1:MouseEvent) : void
      {
         var figthwithAkxiya:Function = null;
         var event:MouseEvent = param1;
         figthwithAkxiya = function():void
         {
            FightManager.fightWithBoss("阿克西亚",28);
         };
         NpcDialog.show(NPC.AKXY,["战胜我就可以获得0xff0000玄冰0xffffff——进化成为冰系精灵诺狄拉的必备道具！"],["我要挑战你!","待会儿再来吧！"],[figthwithAkxiya]);
      }
      
      protected static function onClickNuokailsiHandler(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.NUOKAILASI,["战神盖亚，我一定会打败你的，让你知道上古魔枭的厉害！"],["我等待你的挑战！     "]);
      }
      
      protected static function onClickNuokesiHandler(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86064386);
         NpcDialog.show(NPC.NUOKAIER,["挑战0xFF0000纳多雷0xFFFFFF，收集0xFF0000大地之核0xFFFFFF，就能够帮助我们合体！届时上古魔枭苏醒。我们会给你丰厚的回报"],["我思考一下！    "]);
      }
      
      protected static function onClickNuodilaHandler(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86064385);
         NpcDialog.show(NPC.NUOKAIER,["挑战0xFF0000阿克西亚0xFFFFFF，收集0xFF0000玄冰0xFFFFFF，就能够帮助我们合体！届时上古魔枭苏醒。我们会给你丰厚的回报！"],["我思考一下！    "]);
      }
      
      protected static function onClickNuokaierHandler(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86064387);
         NpcDialog.show(NPC.NUOKAIER,["挑战0xFF0000雷纳多0xFFFFFF，收集0xFF0000纯净能量0xFFFFFF，就能够帮助我们合体！届时上古魔枭苏醒。我们会给你丰厚的回报！"],["我思考一下！    "]);
      }
      
      private static function playPreStory() : void
      {
         SocketConnection.send(1022,86064741);
         TaskDiaLogManager.single.playStory(getStorys(),function():void
         {
            _map.conLevel["mcNPC"].visible = true;
            KTool.showMapPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            DisplayUtil.removeForParent(taskMC);
            BufferRecordManager.setMyState(906,true);
            addEvent();
            SocketConnection.send(1022,86064742);
         });
      }
      
      private static function getStorys() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 1;
         var _loc3_:String = "active_20131122_14";
         _loc1_.push(new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,[_loc3_,true]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.NUOKAILASI,["又来了一群不知死活的家伙，不要以为人多我就会怕了，上古魔枭的苏醒就拿你们来祭旗吧！"],["真是咄咄逼人。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["虽然那三个家伙说话有点讨厌，不过比起一身戾气的你，我还是挺怀念他们的！"],["他们？现在已经不需要他们了。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.NUOKAILASI,["只是因为我力量太强了，才需要分开把力量寄存在他们三个身上，现在我已经苏醒，他们也没有存在的意义了。"],["这就是过河拆桥么？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["说得这么好听，刚才你还不是在用他们的力量攻击我，上古魔枭就只有这样吗？"],["当然不是这样。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 1,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.NUOKAILASI,["哟？承受了我一记攻击还能这么轻松地站起来，看来你确实有两下子嘛。"],["你说刚才那下么？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["速度是挺快的，不过攻击就像是挠痒痒一样，难道你指望这样的攻击就能打倒我吗？"],["不知死活的家伙！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.NUOKAILASI,["我的力量不是你能够藐视的，所有敢于阻挡上古魔枭的人最后都只有死路一条！"],["你比那三个家伙还能吹牛呢。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.NUOKAILASI,["第六星系外的精灵真是弱得可怕，哈哈哈哈，看来我不该在这时苏醒，对付你们诺凯尔他们三个足矣！"],["是该给你点教训了！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["你的这份自信真让我想起了当年的库贝萨，不过他的结局可并不好看，你也想尝尝战神的利爪吗？"],["什么库贝萨？我不认识。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.NUOKAILASI,["或许在凡域你是个强者，但是在上古魔枭面前，你只有俯首称臣的份儿！"],["吹牛我还真吹不过你，还是拳脚见真章吧！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 3,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.NUOKAILASI,["看来遇到狠角色了，体内的力量还没有完全苏醒，这下麻烦了……"],["终于知道厉害了吧。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["既然这样，我就等到你完全苏醒，不然传出去别人会说我盖亚欺负一个刚睡醒的家伙，先揉揉你的眼睛吧，哈哈哈哈……"],["这句台词怎么这么像我说的。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.NUOKAILASI,["你会为你的傲慢付出代价的，等待上古魔枭彻底觉醒，就是你们末日的开始！"],["我倒是很想看看！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["放马过来吧，我倒是很想见识一下第六星系的精灵有什么不一样的！"],["你会后悔的！"]));
         return _loc1_;
      }
      
      public static function destroy() : void
      {
         removeEvent();
         if(taskMC != null)
         {
            DisplayUtil.removeForParent(taskMC);
            taskMC = null;
         }
         if(_map)
         {
            _map = null;
         }
      }
   }
}
