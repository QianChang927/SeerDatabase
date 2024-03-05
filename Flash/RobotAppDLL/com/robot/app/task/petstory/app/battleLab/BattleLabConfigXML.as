package com.robot.app.task.petstory.app.battleLab
{
   public class BattleLabConfigXML
   {
       
      
      private var _xml:XML;
      
      private var _npcList:Array;
      
      private var _bossList:Array;
      
      public function BattleLabConfigXML()
      {
         this._xml = <NPC>
			<npc id="1" name="龙之守护" clothIds="100793|100794|100795|100796" dialog="无威则不立！战！"/>
			<npc id="2" name="闪光勇士" clothIds="100096|100097|100098|100099" dialog="看看谁才是真正的勇士！"/>
			<npc id="3" name="蓝骑士" clothIds="100063|100064|100065|100066" dialog="作为一名骑士要保持优雅………"/>
			<npc id="4" name="黑武士" clothIds="100016|100017|100018|100019" dialog="哼，你差的太远了"/>
			<npc id="5" name="绿光勇士" clothIds="100478|100479|100480" dialog="生命之力为我所用！"/>
			<npc id="6" name="海啸勇士" clothIds="100481|100482|100483" dialog="我想拥抱大海"/>
			<npc id="7" name="烈焰勇士" clothIds="100475|100476|100477" dialog="让世界熊熊燃烧吧！"/>
			<npc id="8" name="光能勇士" clothIds="100151|100152|100153|100154" dialog="闪耀吧！光的能量！"/>
			<npc id="9" name="室女座的琪琪" clothIds="100155|100156|100157|100158" dialog="嘿嘿，我们来玩玩吧！"/>
			<npc id="10" name="火蜂勇士" clothIds="100241|100242|100243|100244" dialog="没有人能超越我的速度"/>
			<npc id="11" name="武士塔库" clothIds="100286|100287|100288|100289" dialog="武士的尊严不容践踏"/>
			<npc id="12" name="利刃·丹尼尔" clothIds="100772|100773|100774|100775" dialog="哈！我要破开一切！"/>
			<npc id="13" name="云之翼" clothIds="100290|100291|100292|100293" dialog="空中滑翔的感觉真是太好了"/>
			<npc id="14" name="尊者汤姆" clothIds="100294|100295|100296|100297" dialog="训练师的巅峰在哪里……"/>
			<npc id="15" name="冰之勇士" clothIds="100759|100760|100761|100762" dialog="坚强的意志是成功的关键"/>
			<npc id="16" name="磁暴战士" clothIds="100764|100765|100766|100767" dialog="爆炸吧！"/>
			<npc id="17" name="紫荆勇士" clothIds="100755|100756|100757|100758" dialog="战！"/>
			<npc id="18" name="武装勇士" clothIds="100735|100736|100737|100738" dialog="哼！不自量力！"/>
			
			<bossnpc id="19" name="魔刃扎克" clothIds="100739|100740|100741|100742" dialog="嘿嘿，好久没有人敢挑战我了" BossLevel="10"/>
			<bossnpc id="20" name="小恶魔酷乐" clothIds="100229|100230|100231|100232" dialog="嗯哼！你太不给力了！！" BossLevel="20"/>
			<bossnpc id="21" name="激斗武神" clothIds="100634|100635|100636|100637|100638" dialog="好久没有畅快淋漓的战斗了！" BossLevel="30"/>
			</NPC>;
         this._npcList = [];
         this._bossList = [];
         super();
      }
      
      public function setup() : void
      {
         var _loc1_:Object = null;
         var _loc2_:XML = null;
         var _loc3_:XML = null;
         for each(_loc2_ in this._xml["npc"])
         {
            _loc1_ = new Object();
            _loc1_.id = _loc2_.@id;
            _loc1_.name = _loc2_.@name;
            _loc1_.clothIds = this.string2Arr(_loc2_.@clothIds);
            _loc1_.dialog = this.string2Arr(_loc2_.@dialog);
            this._npcList.push(_loc1_);
         }
         for each(_loc3_ in this._xml["bossnpc"])
         {
            _loc1_ = new Object();
            _loc1_.id = _loc3_.@id;
            _loc1_.name = _loc3_.@name;
            _loc1_.clothIds = this.string2Arr(_loc3_.@clothIds);
            _loc1_.dialog = this.string2Arr(_loc3_.@dialog);
            this._bossList.push(_loc1_);
         }
      }
      
      private function string2Arr(param1:String) : Array
      {
         var _loc2_:Array = null;
         if(String(param1) == "")
         {
            _loc2_ = [];
         }
         else
         {
            _loc2_ = param1.split("|");
         }
         return _loc2_;
      }
      
      public function getNpcList() : Array
      {
         return this._npcList;
      }
      
      public function getBossList() : Array
      {
         return this._bossList;
      }
      
      public function destory() : void
      {
         this._npcList.splice(0);
         this._npcList = null;
         this._bossList.splice(0);
         this._bossList = null;
      }
   }
}
