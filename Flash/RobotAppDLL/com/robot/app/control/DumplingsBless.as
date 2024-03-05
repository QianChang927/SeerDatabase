package com.robot.app.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.controller.MouseController;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class DumplingsBless
   {
      
      public static var isFightAble:Boolean = false;
      
      private static var _instance:com.robot.app.control.DumplingsBless;
       
      
      private var isFight:Boolean;
      
      private var _map:BaseMapProcess;
      
      private var _catchedPet:Boolean;
      
      private var _isFight:Boolean;
      
      private var mcLoader:MCLoader;
      
      private var wbSwfMc:MovieClip;
      
      public var mapArr:Array;
      
      private var currentMapIndex:uint;
      
      private var npcLocArr:Array;
      
      private var typyArr:Array;
      
      private var secondMasterMc:MovieClip;
      
      private var machMc:MovieClip;
      
      private var petAniMc:MovieClip;
      
      private var lightArr:Array;
      
      private var exType:uint;
      
      private var exId:uint;
      
      private var exCnt:uint;
      
      public function DumplingsBless()
      {
         this.mapArr = [437,459,404,439,424];
         this.npcLocArr = [[590,246,2],[138,306,2],[274,392,1],[188,450,2],[230,364,2]];
         this.typyArr = [2,1,3,4,7];
         super();
         if(_instance != null)
         {
            throw new Error("该类是单例模式");
         }
         _instance = this;
      }
      
      public static function get instance() : com.robot.app.control.DumplingsBless
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.control.DumplingsBless();
         }
         return _instance;
      }
      
      public function init() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.onAddWbHandler);
      }
      
      private function onAddWbHandler(param1:MapEvent) : void
      {
         var _loc2_:int = 0;
         while(_loc2_ < 5)
         {
            if(param1.mapModel.id == this.mapArr[_loc2_])
            {
               this.currentMapIndex = _loc2_;
               this.mcLoader = new MCLoader();
               this.mcLoader.addEventListener(MCLoadEvent.SUCCESS,this.onSuccessHandler);
               this.mcLoader.doLoad("resource/task/wbSwfMc.swf");
            }
            _loc2_++;
         }
      }
      
      private function onSuccessHandler(param1:MCLoadEvent) : void
      {
         this.mcLoader.removeEventListener(MCLoadEvent.SUCCESS,this.onSuccessHandler);
         this.wbSwfMc = param1.getContent() as MovieClip;
         MapManager.currentMap.controlLevel.addChild(this.wbSwfMc);
         this.wbSwfMc.x = this.npcLocArr[this.currentMapIndex][0];
         this.wbSwfMc.y = this.npcLocArr[this.currentMapIndex][1];
         this.wbSwfMc.gotoAndStop(this.npcLocArr[this.currentMapIndex][2]);
         this.wbSwfMc.buttonMode = true;
         this.wbSwfMc.addEventListener(MouseEvent.CLICK,this.onClickWbHandler);
      }
      
      private function onClickWbHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.YUANXIAOSSHIZHE,["亲爱的小赛尔，元宵使者为你服务，我可以帮助你瞬间抵达赫鲁卡星哦！"],["现在就回去！","我过会儿再回去！"],[function():void
         {
            com.robot.app.control.DumplingsBless.instance.goToMap460();
         }]);
      }
      
      public function goToMap460() : void
      {
         MapManager.changeMap(460);
      }
      
      public function initMap460(param1:BaseMapProcess) : void
      {
         this._map = param1;
         this.secondMasterMc = this._map.conLevel["secondMasterMc"];
         this.machMc = this._map.conLevel["machMc"];
         this.petAniMc = this._map.depthLevel["petAniMc"];
         this.petAniMc.gotoAndStop(1);
         this.petAniMc.visible = false;
         this.petAniMc.mouseChildren = false;
         this.petAniMc.mouseEnabled = false;
         this.secondMasterMc.buttonMode = true;
         this.secondMasterMc.addEventListener(MouseEvent.CLICK,this.onClickSMMHandler);
         this.machMc.buttonMode = true;
         this.machMc.addEventListener(MouseEvent.CLICK,this.onClickMachHandler);
         if(param1.conLevel["guide_mc"])
         {
            param1.conLevel["guide_mc"].visible = true;
         }
      }
      
      private function onClickSMMHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         BitBuffSetClass.getBitSet([22410],function(param1:Array):void
         {
            var arr:Array = param1;
            var bool:Boolean = Boolean(arr[0]);
            if(!bool)
            {
               NpcDialog.show(NPC.ERDANGJIA,["怎么办，这部远古召唤器现在已经无法启动了，回想当初它是如此的神奇……."],["远古召唤器？？？."],[function():void
               {
                  AnimateManager.playFullScreenAnimate("resource/bounsMovie/dumplingsMov1.swf",function():void
                  {
                     NpcDialog.show(NPC.ERDANGJIA,["哎…可惜现在已经无法正常使用了！看来这次的元宵节礼物又要泡汤了！"],["长老长老，你怎么啦？需要我帮你做点什么吗？"],[function():void
                     {
                        NpcDialog.show(NPC.ERDANGJIA,[MainManager.actorInfo.nick + "，你来的正好！曾经听赫鲁卡星长老说这部远古召唤器和元宵节有着密切的关系，之前我经过赫鲁卡城正好看到空中出现了好多彩灯哦！"],["是吗？太好了，我这就去调查一下！"],[function():void
                        {
                           NpcDialog.show(NPC.ERDANGJIA,["先别急着去！我有仔细看过这些彩灯，好像和水、火、草、地面、飞行元素有关哦！莫非是需要这些对应精灵的帮助才能与彩灯产生共鸣吗？你记得带上这些精灵去看看吧！"],["好嘞！你就等我的好消息吧！"],[function():void
                           {
                              BitBuffSetClass.setBitSet([22410],[1],function():void
                              {
                                 MapManager.changeMap(461);
                              });
                           }]);
                        }]);
                     }]);
                  });
               }]);
            }
            else
            {
               NpcDialog.show(NPC.ERDANGJIA,["哇！小赛尔你这么快就回来了，那些彩灯里有什么玄机吗？是不是关于和元宵有关呢？"],["恩，是的，我已经收集了一些元宵祝福了！"],[function():void
               {
                  NpcDialog.show(NPC.ERDANGJIA,["真的吗？快去我身边的远古召唤器试试，这些元宵祝福是否有效果！"],["好嘞！"],[function():void
                  {
                  }]);
               }]);
            }
         });
      }
      
      private function onClickMachHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         BitBuffSetClass.getBitSet([22410],function(param1:Array):void
         {
            var arr:Array = param1;
            var bool:Boolean = Boolean(arr[0]);
            if(!bool)
            {
               NpcDialog.show(NPC.SEER,["咦？这个是什么东西，我还是问问二当家再说吧！"],null,null,false);
               return;
            }
            if(com.robot.app.control.DumplingsBless.isFightAble)
            {
               NpcDialog.show(NPC.ERDANGJIA,["快看，元宵精灵已经出现啦！它就在我身边哦，赶快拥有它吧！"],null,null,false,function():void
               {
               });
               return;
            }
            ModuleManager.showModule(ClientConfig.getAppModule("DumplingsExchangePanel"),"加载外部资源");
         });
      }
      
      public function initMap461(param1:BaseMapProcess) : void
      {
         var _loc3_:MovieClip = null;
         this._map = param1;
         this.lightArr = new Array();
         var _loc2_:int = 0;
         while(_loc2_ < 5)
         {
            this.lightArr.push(this._map.conLevel["dumpLightMc" + _loc2_]);
            _loc2_++;
         }
         _loc2_ = 1;
         for each(_loc3_ in this.lightArr)
         {
            _loc3_.gotoAndStop(_loc2_++);
            _loc3_.addEventListener(MouseEvent.CLICK,this.onClickLightHandler);
            _loc3_.buttonMode = true;
            _loc3_.mouseChildren = false;
         }
      }
      
      private function onClickLightHandler(param1:MouseEvent) : void
      {
         var petId:uint = 0;
         var petType:String = null;
         var e:MouseEvent = param1;
         var mc:MovieClip = e.currentTarget as MovieClip;
         var id:int = mc.currentFrame - 1;
         if(MainManager.actorModel.pet)
         {
            petId = uint(MainManager.actorModel.pet.info.petID);
            petType = String(PetXMLInfo.getType(petId));
            if(this.typyArr[id] == petType)
            {
               this.showGoPanel(id);
               return;
            }
         }
         NpcDialog.show(NPC.SEER,["咦？怎么没有反应呢？难道是我身边跟随的精灵不对吗？我再用其他的精灵来试试！"],["只有与彩灯相同系别的精灵跟随身边才能打开彩灯哦！"],[function():void
         {
         }]);
      }
      
      private function showGoPanel(param1:int) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("DumplingsGoPanel"),"正在加载",param1);
      }
      
      public function onExchange() : void
      {
         SocketConnection.addCmdListener(CommandID.DUMPLINGS_BLESS_EXCHANGE,this.onExchangeHandler);
         SocketConnection.send(CommandID.DUMPLINGS_BLESS_EXCHANGE);
      }
      
      private function onExchangeHandler(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.DUMPLINGS_BLESS_EXCHANGE,this.onExchangeHandler);
         data = e.data as ByteArray;
         this.exType = data.readUnsignedInt();
         if(this.exType == 1)
         {
            this.exId = data.readUnsignedInt();
            this.exCnt = data.readUnsignedInt();
            if(this.exId == 3)
            {
               Alarm.show("<font color=\'#ff0000\'>" + this.exCnt + "积累经验</font>已经存入你的经验分配器中。");
            }
            else
            {
               ItemInBagAlert.show(this.exId,"恭喜你获得了基地家具：<font color=\'#ff0000\'>" + ItemXMLInfo.getName(this.exId) + "</font>。");
            }
         }
         else if(this.exType == 2)
         {
            com.robot.app.control.DumplingsBless.isFightAble = true;
            this.petAniMc.visible = true;
            MouseController.removeMouseEvent();
            NpcDialog.show(NPC.ERDANGJIA,["太好了，终于….终于成功了，感谢你" + MainManager.actorInfo.nick + "！我现在就试试能不能召唤出些什么！"],["真的吗？好期待哦！"],[function():void
            {
               AnimateManager.playFullScreenAnimate("resource/bounsMovie/dumplingsMov2.swf",function():void
               {
                  AnimateManager.playMcAnimate(petAniMc,0,"",function():void
                  {
                     MouseController.addMouseEvent();
                     showFightPet();
                     NpcDialog.show(NPC.ERDANGJIA,["哇！原来是它....传说中的元宵精灵古丽，如果你能拥有它的话，在这一年中都会给你带来好运哦！"],["太棒啦！我这就去！"],[function():void
                     {
                     }]);
                  });
               });
            }]);
         }
      }
      
      private function showFightPet() : void
      {
         this.petAniMc.visible = true;
         this.petAniMc.buttonMode = true;
         this.petAniMc.mouseEnabled = true;
         this.petAniMc.gotoAndStop(this.petAniMc.totalFrames);
         this.petAniMc.addEventListener(MouseEvent.CLICK,this.onClickFightHandler);
      }
      
      private function hideFightPet() : void
      {
         this.petAniMc.visible = false;
         this.petAniMc.buttonMode = false;
         this.petAniMc.mouseEnabled = false;
         this.petAniMc.gotoAndStop(1);
         this.petAniMc.removeEventListener(MouseEvent.CLICK,this.onClickFightHandler);
      }
      
      private function onClickFightHandler(param1:Event) : void
      {
         EventManager.addEventListener(PetFightEvent.CATCH_PET,this.onCatchPetHandler);
         EventManager.addEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClickHandler);
         this._isFight = true;
         FightManager.fightWithBoss("精灵",0);
      }
      
      private function onCatchPetHandler(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         EventManager.removeEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClickHandler);
         EventManager.removeEventListener(PetFightEvent.CATCH_PET,this.onCatchPetHandler);
         com.robot.app.control.DumplingsBless.isFightAble = false;
         this._catchedPet = true;
         this._isFight = false;
         this.hideFightPet();
         NpcDialog.show(NPC.ERDANGJIA,["恭喜啊！小赛尔你终于获得了古丽，看来在新年中好运一定会伴随你的！对了，你也可以多多收集这些元宵祝福哦，7天后你就能来我这里兑换一些开学礼包了！我想你一定会喜欢的！"],["恩，太好了，7天后我一定会来找你的！"],[function():void
         {
         }]);
      }
      
      private function onAlarmClickHandler(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         EventManager.removeEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClickHandler);
         EventManager.removeEventListener(PetFightEvent.CATCH_PET,this.onCatchPetHandler);
         this._isFight = false;
         com.robot.app.control.DumplingsBless.isFightAble = false;
         this.hideFightPet();
         NpcDialog.show(NPC.ERDANGJIA,["哎…太可惜了！不过没关系，只要你再去收集这些特殊的元宵祝福就能再次开启远古召唤器啦！"],["好的，我等下还会再来的！"],[function():void
         {
         }]);
      }
      
      public function destory() : void
      {
         var _loc1_:MovieClip = null;
         if(this.wbSwfMc)
         {
            this.wbSwfMc.removeEventListener(MouseEvent.CLICK,this.onClickWbHandler);
         }
         if(this.secondMasterMc)
         {
            this.secondMasterMc.removeEventListener(MouseEvent.CLICK,this.onClickSMMHandler);
         }
         if(this.machMc)
         {
            this.machMc.removeEventListener(MouseEvent.CLICK,this.onClickMachHandler);
         }
         if(this.lightArr)
         {
            for each(_loc1_ in this.lightArr)
            {
               _loc1_.removeEventListener(MouseEvent.CLICK,this.onClickLightHandler);
            }
         }
      }
   }
}
